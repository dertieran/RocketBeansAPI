**The RocketBeans API uses the WSSE UsernameToken Algorithm**

WSSE is a family of open security specifications for web services, specifically SOAP web services. However, the [UsernameToken](http://www.oasis-open.org/committees/wss/documents/WSS-Username-02-0223-merged.pdf) (PDF) algorithm is not SOAP-specific, it can be easily adapted to work within the HTTP authentication framework.

**The algorithm  itself works like this:**

1. Start with 2 pieces of information: **Key** and **Secret**.
2. Create a **Nonce**, which is a cryptographically random string. This is harder than it sounds; if an attacker can guess your next nonce, they can still attempt a replay attack. Most cryptography libraries have routines to generate decent nonces, the specifics of doing which are beyond the scope of this documentation.
3. Create a **CreationTimestamp** of the current time, in [W3DTF format](https://www.w3.org/TR/NOTE-datetime).
4. Create a **PasswordDigest** that is [SHA1](http://www.ietf.org/rfc/rfc3174.txt) hashed and  [Base64](http://www.ietf.org/rfc/rfc2045.txt) encoded:
```no-highlight
PasswordDigest = Base64 \ (SHA1 (Nonce + CreationTimestamp + Secret))
```

**An example will help make this clearer:**

1. Let's say Bob's **Key** is `"bob"`, and his **Secret** is `"taadtaadpstcsm"`.
2. Bob creates a **Nonce**, `"d36e316282959a9ed4c89851497a717f"`.
3. Bob created this nonce at `"2003-12-15T14:43:07Z"`, so that's the **CreationTimestamp**.
4. Bob's **PasswordDigest** is `Base64 \ (SHA1 ("d36e316282959a9ed4c89851497a717f" + "2003-12-15T14:43:07Z" + "taadtaadpstcsm"))`, which is `"quR/EWLAV4xLf9Zqyw4pDmfV90Y="`. Most languages have built-in libraries to create SHA-1 hashes and to encode strings in Base64 format.

**Now let's see how this algorithm fits into the HTTP authentication framework:**

The RocketBeans API is at api.rocketmgmt.de, and has a `/podcast` endpoint. Bob want to get the Podcasts, by sending an HTTP GET request:
```http
GET /podcast HTTP/1.1
Host: api.rocketmgmt.de
Authorization: WSSE profile="UsernameToken"
X-WSSE: UsernameToken Username="bob", PasswordDigest="quR/EWLAV4xLf9Zqyw4pDmfV9OY=", Nonce="d36e316282959a9ed4c89851497a717f", Created="2003-12-15T14:43:07Z"
```
