"use client"

import { motion } from "framer-motion"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  ReferenceLine
} from "recharts"

const CHART_DATA = [
  { name: '2020', strategy: 27, hsi: 3.4 },
  { name: '2021', strategy: 19, hsi: -14.1 },
  { name: '2022\n(Bear Market)', strategy: -9, hsi: -15.5 },
  { name: '2023\n(Trough)', strategy: 4, hsi: -13.8 },
  { name: '2024', strategy: 20, hsi: 17.6 },
  { name: '2025', strategy: 33, hsi: 27.7 },
]

// Custom Label to handle positive/negative placement and formatting
const CustomLabel = (props: any) => {
  const { x, y, width, height, value } = props;
  const isPositive = value >= 0;
  const displayValue = `${isPositive ? '+' : ''}${value}%`;

  // Position above the bar if positive, below if negative
  const yPos = isPositive ? y - 8 : y + height + 15;

  return (
    <text
      x={x + width / 2}
      y={yPos}
      fill="oklch(0.68 0.03 65)"
      fontSize={12}
      fontWeight="bold"
      textAnchor="middle"
    >
      {displayValue}
    </text>
  );
};

// Custom tick to handle multi-line labels on X-axis (for Bear Market / Trough)
const CustomXAxisTick = ({ x, y, payload }: any) => {
  const lines = payload.value.split('\n');
  return (
    <g transform={`translate(${x},${y})`}>
      {lines.map((line: string, index: number) => (
        <text
          key={index}
          x={0}
          y={index === 0 ? 15 : 30}
          dy={0}
          textAnchor="middle"
          fill="oklch(0.68 0.03 65)"
          fontSize={12}
        >
          {line}
        </text>
      ))}
    </g>
  );
};


export function CommitmentSection() {
  return (
    <section id="commitment" className="relative bg-secondary/40 px-6 py-28 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-7"
        >
          <span className="text-xs uppercase tracking-[0.35em] text-primary/90">Our Commitment</span>
          <h2 className="text-balance font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
            A rigorous, quantitative dual-track strategy
          </h2>
          <p className="max-w-md text-pretty leading-relaxed text-foreground/75">
            We commit to utilizing a rigorous, quantitative dual-track strategy grounded in earnestness, integrity,
            and mutual benefit.
          </p>
          <a
            href="/commitments"
            className="inline-flex w-fit rounded-sm border border-primary/50 px-8 py-3 text-sm uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Our Commitment
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-md border border-border bg-card p-6 sm:p-8"
        >
          <p className="mb-1 text-xs uppercase tracking-[0.25em] text-muted-foreground text-center">
            Simulated Backtest: Dual-Track Strategy vs Hang Seng Index (2020-2025)
          </p>
          <div className="h-[400px] w-full sm:h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={CHART_DATA}
                margin={{
                  top: 40,
                  right: 30,
                  left: 0,
                  bottom: 40,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="oklch(0.29 0.02 55)" />
                <XAxis
                  dataKey="name"
                  tick={<CustomXAxisTick />}
                  axisLine={{ stroke: 'oklch(0.29 0.02 55)' }}
                  tickLine={false}
                />
                <YAxis
                  domain={[-20, 45]}
                  ticks={[-20, -10, 0, 10, 20, 30, 40]}
                  axisLine={{ stroke: 'oklch(0.29 0.02 55)' }}
                  tickLine={true}
                  tick={{ fill: "oklch(0.68 0.03 65)", fontSize: 12 }}
                  label={{
                    value: 'Annualized Return (%)',
                    angle: -90,
                    position: 'insideLeft',
                    fill: 'oklch(0.68 0.03 65)',
                    style: { textAnchor: 'middle' },
                    offset: -10
                  }}
                />
                <Tooltip
                  formatter={(value: number) => [`${value > 0 ? '+' : ''}${value}%`]}
                  contentStyle={{ backgroundColor: 'oklch(0.19 0.017 55)', borderColor: 'oklch(0.29 0.02 55)', color: 'oklch(0.94 0.02 80)' }}
                  cursor={{fill: 'oklch(0.23 0.02 55)'}}
                />
                <Legend
                  verticalAlign="top"
                  align="left"
                  wrapperStyle={{ paddingBottom: '20px', paddingLeft: '40px' }}
                />

                {/* Zero Line */}
                <ReferenceLine y={0} stroke="oklch(0.29 0.02 55)" strokeWidth={1} />

                <Bar
                  dataKey="strategy"
                  name="Dual-Track Strategy (Simulated)"
                  barSize={30}
                >
                  {CHART_DATA.map((entry, index) => (
                    <Cell
                      key={`cell-strategy-${index}`}
                      fill={entry.strategy >= 0 ? '#caac65' : '#8c7646'}
                    />
                  ))}
                  <CustomLabel />
                </Bar>

                <Bar
                  dataKey="hsi"
                  name="Hang Seng Index"
                  barSize={30}
                >
                  {CHART_DATA.map((entry, index) => (
                    <Cell
                      key={`cell-hsi-${index}`}
                      fill={entry.hsi >= 0 ? '#988764' : '#5b4c2b'}
                    />
                  ))}
                  <CustomLabel />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-4 text-[10px] sm:text-xs text-muted-foreground text-center px-4">
            Disclaimer: Backtest is based on historical data and does not represent future returns. Management and performance fees are not deducted.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
