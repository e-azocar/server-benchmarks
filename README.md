# Backend Server Benchmarks

## Introduction
The goal of this test was to compare three servers built for different runtime environments: **[Bun](https://bun.sh/)**, **[Node.js](https://nodejs.org/)**, and **[Rust](https://www.rust-lang.org/)**. All three respond to the same response, a simple [JSON](https://www.json.org/):

```json
{
    "status": "ok"
}
```
The tool used to test concurrents was **[autocannon](https://github.com/mcollina/autocannon)**

## Test Conditions
All servers ran on a [DigitalOcean](https://www.digitalocean.com/) Droplet with 4 GB RAM, 2 CPU Cores and 80 GB SSD (Ubuntu 22.10)

And the client used for the requests was a PC with 8 GB RAM and 4 CPU Cores (Windows 10)

## Results
10 concurrent requests were sent to the servers using [autocannon](https://github.com/mcollina/autocannon) for approximately 10 seconds, the number of requests and responses in that time span depends on the response time of the server.

### **Average requests per second**
![req-sec](/docs/charts/req-sec.png)

Bun server and Rust server had similar results, but with Bun slightly ahead of the rest, Node.js was far behind in the number of requests per second.

***

### **Average requests per second**
![req-sec](/docs/charts/kb-sec.png)

Results in this test were very similar to the previous one, but with a greater advantage of Bun over Rust.

***

### **Average Latency**
![latency](/docs/charts/latency.png)

In this test, the highest latency by far was the Node.js server, while Rust and Bun were very close with low numbers.


|| Bun.js | NodeJS | Rust |
|-----------------------------------------------------------------|----------------------|--------------------------|----------------------------|
| Uses controllers and middleware? | ✔ | ✔ | ✔ |
| Can connect to postgresql? | ✔ | ✔ | ✔ |
| Does have OpenAPI integration? | ✔ | ✔ | ✔ |
| Does it work with CORS? | ✔ | ✔ | ✔ |
| Does it uses JWT with encryption? | ✔ | ✔ | ✔ |
| Can use Auth0, Passport or any external service for Auth? ||||
| Does it manages ENV variables in a separate config? | ✔ | ✔ | ✔ |
| Can send emails? ||||
| Can create or process PDFs in the server? ||||
| Can create, read or process CSVs? ||||
| Average Request per seconds (10 concurrent requests) | **178.1** | **141.6** | **160.6** |
| Average Request per seconds (1000 concurrent requests) | **3530.8** | **2959.2** | **3120** |
| Average Request per seconds (10000 concurrent requests) | **2843.1** | **2286.81** | **2678.3** |
| Average kb/s (10 concurrent requests) | **47.2 kb/s** | **39.8 kb/s** | **19.8 kB** |
| Average kb/s (1000 concurrent requests) | **936 kb/s** | **831 kb/s** | **328 kb/s** |
| Average kb/s (10000 concurrent requests) | **753 kb/s** | **642 kb/s** | **329 kb/s** |
| Average latency (ms) (10 concurrent requests) | **55.65 ms** | **69.79 ms** | **64.18 ms** |
| Average latency (ms) (1000 concurrent requests) | **56.66 ms** | **67.62 ms** | **74.6 ms** |
| Average latency (ms) (10000 concurrent requests) | **75.6 ms** | **91.21 ms** | **76.53 ms** |