import React, { Component } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import * as data from "./herosPlaceHolder.json";
export default () => {
  console.log(data);
  return { data };
};
