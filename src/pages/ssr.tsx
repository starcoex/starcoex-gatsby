import { GetServerDataProps, GetServerDataReturn } from "gatsby";
import React from "react";

type ServerDataProps = {
  hello: string;
};

export async function getServerData(props: GetServerDataProps): GetServerDataReturn<ServerDataProps> {
  return {
    status: 200,
    headers: {},
    props: {
      hello: "world",
    },
  };
}
