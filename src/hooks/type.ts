import { UserData } from "@/component/listUsers/type";

export type UserDataResponse = {
    results: UserData[];
    info: {
      seed: string;
      results: number;
      page: number;
      version: string;
    };
  };