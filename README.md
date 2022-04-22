## Summary

Woosmap’s Link Cartridge add to your Salesforce Commerce Cloud website an advanced Store Locator Widget.

To match your preferences and website’s graphic style, all the properties of your Store Locator Widget can be customised
through the Salesforce Business Manager.

This document provides technical instructions for using the Woosmap SFCC Cartridges to integrate the Woosmap Store
Locator Widget into the SFCC storefront.

#### Glossary

| Term                      | Description                                                                  |
|---------------------------|------------------------------------------------------------------------------|
| **SFCC**                  | SalesForce Commerce Cloud                                                    |
| **Business Manager (BM)** | The primary tool used to configure the SFCC platform and customer storefront |
| **SFRA**                  | StoreFront Reference Architecture                                            |

## Component Overview

### Functional Overview

The Woosmap cartridge allows the customer to connect to a customized Store Locator displaying stores on a map.
Woosmap cartridge replaces the internal SFCC Store Locator with the Woosmap Store Locator Widget.

The following cartridges are available to integrate with your SFCC storefronts:

| Cartridge Name  | Description                                                                                                                   |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------|
| **int_woosmap** | Handles the display of the Woosmap Store Locator Widget in your SFCC website.                                                 |
| **bm_woosmap**  | Allows you to customise the Woosmap Store Locator Widget look and feel to match your preferences and website’s graphic style. |

### Limitations, Constraints

Use of the Woosmap cartridges requires keys from Woosmap. Please register on <https://www.woosmap.com> and contact
Woosmap customer service.


### Privacy

The Woosmap cartridges does not collect and process user profile information. For additional
privacy information, please contact your Woosmap Account Manager.

## Set up the Woosmap Cartridges

### Implementation Guide

#### Importing cartridges Using the CLI

The CLI used here is [`sgmf-scripts`](https://github.com/SalesforceCommerceCloud/sgmf-scripts/). You could also
upload the cartridges using [`dw-utils`](https://www.npmjs.com/package/dw-utils) or extensions for IntelliJ IDEA, VS
code and Eclipse.  

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

1. Go to **Administration → Sites → Manage Sites** and select your desired site from the **Storefront Site** list:
![Select StoreFront Site](documentation/images/select-storefront-site.jpg)

2. Go to the **Settings** tab. If your site is based on SFRA, add **int_woosmap** at the beginning of your cartridge path.
![Int Cartridge Path](documentation/images/add-int-woosmap-cartridge-path.jpg)

Next, add the cartridge to the Business Manager:

1. Go back to **Administration → Sites → Manage Sites** and click on **Manage the Business Manager Site**.
![BM Cartridge](documentation/images/manage-buisiness-manager.jpg)

2. Go to the **Settings** tab, and add **bm_woosmap:int_woosmap** at the end of your cartridge path.
![BM Cartridge Path](documentation/images/manage-buisiness-manager-path.jpg)


### Import metadata
1.Go to **Administration → Site Development → Site Import & Export**, and upload the `woosmap.zip` archive from the metadata folder.

2.To import `woosmap.zip`, select the radio button next to it and click the import button.
![Metadata Import](documentation/images/metadata-import.jpg)

3. Check the import is successful.
![Metadata Import Success](documentation/images/metadata-import-success.jpg)

