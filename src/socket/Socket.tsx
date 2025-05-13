import { createContext, useContext, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/Store";
import Config from "react-native-config";


const SocketContext = createContext<any>(null);
const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket?.current || null;
};

export const SocketProvider = ({ children }: any) => {
  const socketRef = useRef<any>(null);
  const data = useSelector((state: RootState) => state.user.data);
  const apiData = useSelector((state: RootState) => state.api.data);
  const { selectedChatData, selectedChatMessage } = useSelector(
    (state: RootState) => state.chat
  );
  const  contacts  = useSelector((state: RootState) => state.contact.data);
  const dispatch = useDispatch<AppDispatch>();
  const API = Config.API_URL;

  useEffect(() => {
    if (!data || socketRef.current) return; // initiallly socketRef.current null untundi and !data null unte return empty chesta next data update ayinapudu useEffect data run avuthundi that time lo socket.current value unte next enpty chestamu
    socketRef.current = io(API, {
      withCredentials: true,
      query: { userId: data?._id },
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });
    socketRef.current.on("connect", () => console.log("✅ Socket Connected"));
    socketRef.current.on("disconnect", () =>
      console.log("❌ Socket Disconnected")
    );
    socketRef.current.on("connect_error", (err: any) => {
      console.error("Connection error:", err);
    });

    return () => {
      console.log("🧹 Disconnecting socket...");
      socketRef.current?.disconnect(); //  Important cleanup
    };
  }, [data?._id]);

  useEffect(() => {
   
  }, []);

  return (
    <SocketContext.Provider value={socketRef}>
      {children}
    </SocketContext.Provider>
  );
};

export default useSocket;
