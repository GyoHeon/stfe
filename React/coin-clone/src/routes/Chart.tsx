import { useQuery } from "react-query";
import { fetchCoinHistory } from "./api";
import ApexChart from "react-apexcharts";

interface ChartProps {
  coinId: string;
}
interface IHistory {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistory[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading Chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "close",
              data: data?.map((price) => price.close),
            },
          ]}
          options={{
            chart: {
              height: 500,
              width: 500,
              background: "transparent",
              toolbar: {
                show: false,
              },
            },
            yaxis: { decimalsInFloat: 2 },
            xaxis: {
              type: "datetime",
              categories: data?.map((price) => price.time_close),
            },
            theme: {
              mode: "dark",
            },
            stroke: {
              curve: "smooth",
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
