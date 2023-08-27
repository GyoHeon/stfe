import { IncomingMessage, createServer } from "http";
import fetch from "node-fetch";
import { parse } from "querystring";
import URL from "url";

const URL_QUERY = ({ page = 1 }: { page?: number }) => {
  return `https://product.kyobobook.co.kr/api/gw/pub/pdt/best-seller/online?page=${page}&per=20&period=001&dsplDvsnCode=000&dsplTrgtDvsnCode=001`;
};

type TParsedQuery = {
  page?: number;
};

const apiBest = async (req: IncomingMessage) => {
  const { query } = URL.parse(req.url || "");
  const parseQuery = parse(query || "page=1") as TParsedQuery;

  const res = await fetch(URL_QUERY(parseQuery));

  const data = await res.json();

  return data;
};

const PORT = 3000;

const server = createServer(async (req, res) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "OPTIONS, GET",
    "Access-Control-Max-Age": 2592000,
    "Content-Type": "application/json",
  };

  if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "application/json" });

    return res.end(
      JSON.stringify({
        message: "Hello World",
      })
    );
  } else if (req.url?.startsWith("/kyobobook/best")) {
    const data = await apiBest(req);

    res.writeHead(200, headers);
    return res.end(JSON.stringify(data));
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
