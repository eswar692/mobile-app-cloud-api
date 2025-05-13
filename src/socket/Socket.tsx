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
 
  const API = Config.API_URL;

  useEffect(() => {
    // socketRef.current = io(API, {
    //   withCredentials: true,
    //   query: { userId: data?._id },
    //   reconnectionAttempts: 5,
    //   reconnectionDelay: 1000,
    // });
    // socketRef.current.on("connect", () => console.log("✅ Socket Connected"));
    // socketRef.current.on("disconnect", () =>
    //   console.log("❌ Socket Disconnected")
    // );
    // socketRef.current.on("connect_error", (err: any) => {
    //   console.error("Connection error:", err);
    // });

    // return () => {
    //   console.log("🧹 Disconnecting socket...");
    //   socketRef.current?.disconnect(); //  Important cleanup
    // };
  }, []);

  useEffect(() => {
   
  }, []);

  return (
    <SocketContext.Provider value={socketRef}>
      {children}
    </SocketContext.Provider>
  );
};

export default useSocket;
