import "dotenv/config";

import { opentelemetry } from "@elysiajs/opentelemetry";
import { BatchSpanProcessor } from "@opentelemetry/sdk-trace-node";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-proto";
// import { PgInstrumentation } from "@opentelemetry/instrumentation-pg";

export const instrumentation = opentelemetry({
  spanProcessors: [new BatchSpanProcessor(new OTLPTraceExporter())],
  //   instrumentations: [new PgInstrumentation()],
});
