import { FC } from "react";
import { api } from "./lib";
import { useQuery } from "@tanstack/react-query";

const App: FC = () => {
  const { data: userData } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await api.get("/");
      return response.data;
    },
  });

  return (
    <div>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </div>
  );
};

export default App;
