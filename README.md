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
All servers ran on a [DigitalOcean](https://www.digitalocean.com/) Droplet with 8 GB RAM, 4 CPU Cores and 80 GB SSD (Ubuntu 22.10)

And the client used for the requests was a PC with 8 GB RAM and 4 CPU Cores (Windows 10)

## Results
1000 concurrent requests were sent to the servers using [autocannon](https://github.com/mcollina/autocannon) for approximately 10 seconds, the number of requests and responses in that time span depends on the response time of the server.

### **Average requests per second**
![req-sec](/docs/charts/req-sec-2.png)

***

### **Average requests per second**
![req-sec](/docs/charts/kb-sec-2.png)

***

### **Average Latency**
![latency](/docs/charts/latency-2.png)


## Full Results

|| Bun.js | NodeJS | Rust |
|-----------------------------------------------------------------|----------------------|--------------------------|----------------------------|
| Uses controllers and middleware? | ✔ | ✔ | ✔ |
| Can connect to postgresql? | ✔* (pg) | ✔ (pg) | ✔ (sqlx) |
| Does have OpenAPI integration? | ✔ (@elysiajs/swagger) | ✔ (swagger-ui-express) | ✔ (utoipa) |
| Does it work with CORS? | ✔ (@elysiajs/cors) | ✔ (cors) | ✔ (tower_http) |
| Does it uses JWT with encryption? | ✔ (@elysiajs/jwt) | ✔ (jwt) | ✔ (jsonwebtoken) |
| Can use Auth0, Passport or any external service for Auth? | ✔* | ✔ | ✔ |
| Does it manages ENV variables in a separate config? | ✔ | ✔ | ✔ |
| Can send emails? | ✔* (nodemailer) | ✔ (nodemailer) | ✔ (lettre) |
| Can create or process PDFs in the server? | ✔* (pdfkit) | ✔ (pdfkit) | ✔ (genpdf) |
| Can create, read or process CSVs? | ✔* (csv-parser) | ✔ (csv-parser) | ✔ (csv) |
| Average Request per seconds (10 concurrent requests) | **178.1** | **141.6** | **160.6** |
| Average Request per seconds (1000 concurrent requests) | **3530.8** | **2959.2** | **3120** |
| Average Request per seconds (10000 concurrent requests) | **2843.1** | **2286.81** | **2678.3** |
| Average kb/s (10 concurrent requests) | **47.2 kb/s** | **39.8 kb/s** | **19.8 kB** |
| Average kb/s (1000 concurrent requests) | **936 kb/s** | **831 kb/s** | **328 kb/s** |
| Average kb/s (10000 concurrent requests) | **753 kb/s** | **642 kb/s** | **329 kb/s** |
| Average latency (ms) (10 concurrent requests) | **55.65 ms** | **69.79 ms** | **64.18 ms** |
| Average latency (ms) (1000 concurrent requests) | **56.66 ms** | **67.62 ms** | **55.98 ms** |
| Average latency (ms) (10000 concurrent requests) | **75.6 ms** | **91.21 ms** | **76.53 ms** |

**\*Using Node.js libraries**
