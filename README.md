## Introduction

Woosmap’s Link Cartridge add to your Salesforce Commerce Cloud website an advanced Store Locator Widget.

To match your preferences and website’s graphic style, all the properties of your Store Locator Widget can be customised
through the Salesforce Business Manager.

Integration relies on Woosmap APIs. Please check <https://developers.woosmap.com/support/api-keys/> to get a public API Key.

## Summary
This document provides technical instructions for using the Woosmap SFCC Cartridges to integrate the Woosmap Store Locator Widget into the SFCC storefront.

#### Glossary

| Term                      | Description                                                                  |
|---------------------------|------------------------------------------------------------------------------|
| **SFCC**                  | SalesForce Commerce Cloud                                                    |
| **Business Manager (BM)** | The primary tool used to configure the SFCC platform and customer storefront |
| **SFRA**                  | StoreFront Reference Architecture                                            |


## Set up the Woosmap Cartridges

### Installation

#### Using the CLI

1. Download the cartridge source from the Partner Marketplace.
2. Unzip the directory
3. Install the dependencies from the unzipped directory.

```shell
cd /folder/SalesforceCommerceCloud-link_woosmap-...
npm install
```

4. Create a config file called `dw.json` in the directory that contains the cartridges, and add the following content:

```json
{
  "hostname": "<*.demandware.net (without https/http)>",
  "username": "<username>",
  "password": "<password>",
  "code-version": "<code-version>"
}
```

- `hostname` is the hostname you use to access your sandbox, for
  example `"zzte-003.sandbox.us02.dx.commercecloud.salesforce.com"`,
- `username` and `password` are your account manager email and password,
- `code-version` is the name of the active code version in **Administration → Code Deployment**. For
  example, `"SFRA_UPC_05_04_2021"`.

5. Upload the cartridges by executing the following command.

```shell
npm run uploadCartridge
```

6. Verify that the Woosmap cartridges are correctly uploaded by going to **Administration → Development Setup → Folder
   Browser → Cartridges**.

### Enable the cartridges on your site

Woosmap provides the following cartridges to integrate with your SFCC storefronts:

| Cartridge Name  | Description                                                                                                                   |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------|
| **int_woosmap** | Handles the display of the Woosmap Store Locator Widget in your SFCC website.                                                 |
| **bm_woosmap**  | Allows you to customise the Woosmap Store Locator Widget look and feel to match your preferences and website’s graphic style. |

