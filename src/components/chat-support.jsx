"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, Send, UserRound } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";

import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "@/components/ui/chat/chat-bubble";
import { ChatInput } from "@/components/ui/chat/chat-input";
import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import {
  ExpandableChat,
  ExpandableChatBody,
  ExpandableChatFooter,
  ExpandableChatHeader,
} from "@/components/ui/chat/expandable-chat";
import {
  generativeAI,
  printWordsOneByOne,
} from "@/components/ui/chat/lib/utils";
import MessageLoading from "@/components/ui/chat/message-loading";
import { cn } from "@/lib/utils";

const initialChatSupportMessages = [
  {
    id: "1",
    success: true,
    role: "model",
    parts: [{ text: "Great to meet you. What would you like to know?" }],
    timestamp: new Date().toLocaleTimeString(),
  },
];

const chatHistory = [];

export default function ChatSupport() {
  const [messages, setMessages] = useState(initialChatSupportMessages);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesContainerRef = useRef(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputMessage.trim()) {
      console.log(chatHistory);

      try {
        const userInput = {
          id: Date.now().toString(),
          success: true,
          role: "user",
          parts: [{ text: inputMessage }],
          timestamp: new Date().toLocaleTimeString(),
        };
        setMessages((prev) => [...prev, userInput]);
        setInputMessage("");
        setIsLoading(true);

        // send gemini request
        const response = await generativeAI(chatHistory, inputMessage);

        // const chatBotResponse = {
        //   id: Date.now().toString(),
        //   success: true,
        //   parts: [{ text: response }],
        //   role: "model",
        //   timestamp: new Date().toLocaleTimeString(),
        // };

        // setMessages((prev) => [...prev, chatBotResponse]);

        const chatBotResponseID = Date.now().toString();

        let chunkTextComplete = "";

        const chatBotResponse = {
          id: chatBotResponseID,
          success: true,
          role: "model",
          parts: [{ text: "" }],
          timestamp: new Date().toLocaleTimeString(),
        };

        setMessages((prev) => [...prev, chatBotResponse]);

        for await (const chunk of response.stream) {
          const chunkText = chunk.text();
          chunkTextComplete += chunkText;

          await printWordsOneByOne(chunkText, (letter) =>
            setMessages((prevMessages) =>
              prevMessages.map((message) =>
                message.id === chatBotResponseID
                  ? {
                      ...message,
                      parts: [
                        {
                          ...message.parts[0],
                          text: message.parts[0].text + letter,
                        },
                      ],
                    }
                  : message
              )
            )
          );

          // setMessages((prevMessages) =>
          //   prevMessages.map((message) =>
          //     message.id === chatBotResponseID
          //       ? {
          //           ...message,
          //           parts: [
          //             {
          //               ...message.parts[0],
          //               text: message.parts[0].text + chunkText,
          //             },
          //           ],
          //         }
          //       : message
          //   )
          // );
        }

        // these code wont needed if we use chat.sendMessage() method instead of chat.sendMessageStream() method in the utils page
        chatHistory.push({
          role: userInput.role,
          parts: userInput.parts,
        });
        chatHistory.push({
          role: chatBotResponse.role,
          parts: [{ text: chunkTextComplete }],
        });
      } catch (err) {
        console.log(err);

        const chatBotResponse = {
          id: Date.now().toString(),
          success: false,
          parts: [
            {
              text: "We’re currently experiencing technical difficulties. Please try again shortly. In the meantime, you may continue to browse our website.",
            },
          ],
          role: "model",
          timestamp: new Date().toLocaleTimeString(),
        };

        setMessages((prev) => [...prev, chatBotResponse]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <ExpandableChat
      icon={
        <Bot className="h-6 w-6" style={{ width: "24px", height: "24px" }} />
      }
      size="lg"
      position="bottom-right"
    >
      <ExpandableChatHeader className="flex-col text-center justify-center">
        <h1 className="text-xl font-semibold">Chat with our AI ✨</h1>
        <p>Ask any question for our AI to answer</p>
        <div className="flex gap-2 items-center pt-2">
          <Button variant="secondary">New Chat</Button>
          <Button variant="secondary">See FAQ</Button>
        </div>
      </ExpandableChatHeader>
      <ExpandableChatBody>
        <ChatMessageList
          ref={messagesContainerRef}
          className="dark:bg-muted/40"
        >
          <AnimatePresence>
            {messages.map((message, index) => {
              return (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0, scale: 1, y: 10, x: 0 }}
                  animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                  exit={{ opacity: 0, scale: 1, y: 1, x: 0 }}
                  transition={{
                    opacity: { duration: 0.1 },
                    layout: {
                      type: "spring",
                      bounce: 0.3,
                      duration: index * 0.05 + 0.2,
                    },
                  }}
                  style={{ originX: 0.5, originY: 0.5 }}
                  className="flex flex-col"
                >
                  <ChatBubble
                    key={message.id}
                    variant={message.role === "user" ? "sent" : "received"}
                  >
                    <ChatBubbleAvatar
                      // src={
                      //   message.role === "user"
                      //     ? "https://somelink.com"
                      //     : ""
                      // }
                      fallback={message.role === "user" ? <UserRound /> : "🤖"}
                    />
                    <ChatBubbleMessage
                      className={cn(
                        !message.success &&
                          "text-white bg-rose-600 font-semibold"
                      )}
                      variant={message.role === "user" ? "sent" : "received"}
                    >
                      {message.parts[0].text}
                    </ChatBubbleMessage>
                  </ChatBubble>
                </motion.div>
              );
            })}

            {isLoading && (
              <div className="flex items-center space-x-2">
                <MessageLoading />
              </div>
            )}
          </AnimatePresence>
        </ChatMessageList>
      </ExpandableChatBody>
      <ExpandableChatFooter>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex relative gap-2"
        >
          <ChatInput
            onKeyDown={onKeyDown}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <Button
            disabled={!inputMessage.trim() || isLoading}
            type="submit"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 shrink-0"
          >
            <Send className="size-4" />
          </Button>
        </form>
      </ExpandableChatFooter>
    </ExpandableChat>
  );
}
