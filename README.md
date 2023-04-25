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

**Full Results in docs folder**