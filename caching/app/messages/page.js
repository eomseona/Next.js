import Messages from "@/components/messages";
import { getMessages } from "@/lib/messages";

export default function MessagesPage() {
  // const response = await fetch('http://localhost:8080/messages', {
  //   headers: {
  //     'X-ID': 'page',
  //   },
  // });
  const messages = getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
