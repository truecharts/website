---
sidebar_position: 8
---
# Adding Lets-Encrypt Certificates

With TrueNAS SCALE, it's possible to automatically generate certificates for your domain(s) using letsencrypt. However, this process is not very self-explanatory.
After you managed to complete this how-to, you should be able to select "iX Certificate" as certificate option and your personal certificate in the other drop-down box!

## Requirements

To use iX Certificates with letsencrypt there are a few requirements:

- Preferably use a DNS server that doesn't have any caching (no local DNS server) for your TrueNAS system.
- Have an email address entered for your TrueNAS SCALE `root` user. (this email will also be used for letsencrypt reminder!)
- Own a domain name
- Use either Cloudflare or AWS Route53 for your domain. (In case you wonder: Using Cloudflare as DNS provider is free)
- Have an active internet connection so TrueNAS SCALE can contact Cloudflare or AWS to verify your domain ownership

## How-To

- Click `Credentials` in the Left side menu and go the `Certificates` page.

![LE2](/img/LE/LE2.png)

- Notice `ACME DNS-Authenticators`, select `Add` besides `ACME DNS-Authenticators` to open the menu for adding your DNS provider for domain verification.

- Enter the required information and click `save`.
For Cloudflare you need either a global API-Key or a limited-scope API token. Please refer to cloudflare and/or AWS on how to get the required credentials.

![LE1](/img/LE/LE1.png)

- Notice `Certificate Signing Requests`, select `Add` besides `Certificate Signing Requests` to open the menu for adding the domain information you want a certificate for.

![LE3](/img/LE/LE3.png)

- Enter all information required in the wizard and save it.
If you are not sure, the defaults are almost always "alright", because most of what you enter here is completely ignored by Letsencrypt.
`Common Name` in this case means `Primary domain name`, whereas `Subject Alternate Names` means `Extra domain names`.

![LE4](/img/LE/LE5.PNG)

- Notice your new `Certificate Signing Request` showing up in the box below `Certificate Signing Requests`. Also notice the small `wrench` icon to the right of your `Certificate Signing Request`

- Click the small `wrench` icon, this will open the `Create ACME Certificate` menu. In this menu we can actually request either a real (Production) certificate or a testing (staging) certificate from Letsencrypt.
For clarity, it's advisable to use the same Authenticator for all domain names. However: It's okay to generate both a testing and a staging certificate for the same domain.

- After saving and awaiting the generation process, you should end up with another `Certificate Signing Request` and a new `Certificate` under `Certificates`, this new `Certificate Signing Request` is used to renew your `Certificate` in the future and should not be deleted!

## Video Guide

<iframe width="560" height="315" src="https://www.youtube.com/embed/TJ5fDiDRcbU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
