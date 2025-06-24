import FetchAsYouRender from "@/FetchAsYouRender";
import FetchOnRender from "@/FetchOnRender";
import FetchThenRender from "@/FetchThenRender";
import Test from "@/Test";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import axios from "axios";
import { useEffect } from "react";
const queryClient = new QueryClient();
interface TodoListRes {
  ok: boolean;
  items: [];
}
function App() {
  
  return (
    <QueryClientProvider client={ queryClient }>    
      <FetchAsYouRender />
      <ReactQueryDevtools initialIsOpen={ false } />
    </QueryClientProvider>
  );
}

export default App
