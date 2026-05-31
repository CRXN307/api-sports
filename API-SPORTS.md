### Headers sent as response

When consuming our API, you will always receive the following headers appended to the response:

-   `x-ratelimit-requests-limit`: The number of requests allocated per day according to your subscription.
-   `x-ratelimit-requests-remaining`: The number of remaining requests per day according to your subscription.
-   `X-RateLimit-Limit`: Maximum number of API calls per minute.
-   `X-RateLimit-Remaining`: Number of API calls remaining before reaching the limit per minute.

### Rate Limiting Policy

If you exceed your allowed request rate per minute, either through continuous excessive usage or by generating abnormal traffic spikes, your access may be temporarily or permanently blocked by our firewall without prior notice. This ensures service stability and fair usage for all customers.

## HOW RATELIMIT WORKS

Mastery of ratelimiting is crucial in ensuring our APIs' stability, optimal performance and fair usage. In this context, Nginx emerges as a skillful orchestrator, ensuring the precise regulation of this critical process. Let's delve into the details of how this advanced system works

### Subscription Plans and Limits:

Every access to our APIs is subject to a ratelimit per minute, depending on the chosen subscription plan:

-  Free Plan: 10 requests per minute
-  Pro Plan: 300 requests per minute
-  Ultra Plan: 450 requests per minute
-  Mega Plan: 900 requests per minute
-  Custom Plan: 1200 requests per minute (For all custom plans up to 1.5 million requests per day)

### Per User, Per API Limit:

It's crucial to note that the ratelimit is applied on a per-user and per-API basis, ensuring that each user adheres to the specific limits defined by their subscription plan.

### Nginx Orchestration:

Nginx orchestrates the ratelimiting process, translating subscription plan limits into manageable rates for efficient processing. For example, if a user is on the Mega Plan with a limit of **900** requests per minute, Nginx converts this limit into a manageable rate, such as **15** requests per second.

As long as users stay below this defined threshold, the ratelimit remains inactive, allowing seamless API interactions without constraints.

In the image above, the 15 requests received in the same second are processed immediately, as we are within the user's plan requests limit.

![image](https://www.api-football.com/public/img/news/rate-1.jpg)

### What happens if you exceed the limit?

For example, with the Mega Plan allowing 15 requests per second, if a user sends 18 requests, Nginx processes the first 15 immediately and queues the remaining 3 for sequential processing. Each request over the limit will be processed as soon as a "slot" becomes available. It will put them on hold and process them as soon as you drop below 15 requests per second.

![image](https://www.api-football.com/public/img/news/rate-2.jpg)

The queuing, known as the burst mechanism, temporarily accommodates additional requests beyond the set limit, providing users with a brief allowance for increased ratelimit.

### Exceeding the Limit and Error Handling

If a user surpasses the allowed rate, triggering a frequency higher than the converted rate, the ratelimit mechanism activates.

In the example below 23 requests are sent, the first 15 will be processed immediately, the next 5 will be put on hold to be processed as soon as a slot will be available, but the last 3 will be rejected.

![image](https://www.api-football.com/public/img/news/rate-3.jpg)

For rejected requests, an error `429` will be returned by the API.

*Example of a 429 error*
```json
{
    "get": "",
    "parameters": [],
    "errors": {
        "rateLimit": "Too many requests. You have exceeded the limit of requests per minute of your subscription."
    },
    "results": 0,
    "paging": {
        "current": 1,
        "total": 1
    },
    "response": []
}
```

### Ensuring Stability and Performance


-  Ratelimit management with Nginx is a delicate balance, ensuring optimal use of APIs while preserving stability and performance.
-  This comprehensive approach ensures that users have a controlled and efficient experience, avoiding potential pitfalls associated with excessive API usage.

In summary, our ratelimiting strategy, is designed to provide a fair, controlled, and efficient API experience for all users, aligning with their respective subscription plans.

If any of our plans or the associated ratelimit are not suited to your needs, please contact us directly by chat to set up a specific service.
