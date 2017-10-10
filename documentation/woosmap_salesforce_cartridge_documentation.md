# Woosmap Salesforce Commerce Cloud Cartridge


## Implementation Guide

### Templates

- **woosmapRecoWidget.isml** - This template is the include block for Woosmap search and recommendation widget
- **woosmapWebappWidget.isml** - This template is the include block for the Woosmap Store Locator Webapp

### Preferences

- **WoosmapPreferences.xml** - This file contains custom preferences for Woosmap

## Setup

Woosmap Cartridge is delivered with additional data containing the following folders and files:
- Folder **documentation** – LINK integration document;
- Folder **int_woosmap** – Woosmap Cartridge;
- Folder **metadata** – contains a file for add woosmap custom preferences to your site.

To install the cartridge **int_woosmap** into the Demandware UX Studio IDE, the steps below should be followed:
- Open Demandware UX Studio;
- Click File -> Import -> General -> Existing Project Into Workspace;
- Browse to the cartridge directory;
- Click Finish.
- Click OK to link the cartridge to the sandbox.


## Configuration

### Assign the Cartridge to the Site

- Log in to Business Manager.
- Click Administration -> Sites -> Manage Sites.
- Select the site for which you want to enable the Woosmap integration.
- Select the Settings tab.
- In the cartridges field add int_woosmap: at the beginning of the existing list: int_woosmap:woosmap_storefront_controllers:woosmap_storefront_core

![woosmap cartridge config](./documentation/woosmap_cartridge_config.jpg)

### Import Woosmap Preferences

Import Metadata

- Log into the Business Manager;
- Go to Administration -> Site Development -> Import & Export;

![woosmap preferences import](./documentation/woosmap_preferences_import.jpg)


- Under Import & Export Files, click Upload;
- Click Browse;
- Locate and select **WoosmapPreferences.xml** file under metadata folder;
- Click Upload;
- Click <<Back (below the import file list) to return to the Import & Export page;
- Under Meta Data, click Import;
- Select the **WoosmapPreferences.xml** file;
- Click Next>> and wait for Business Manager to validate the import file;
- Click Import>> to start the import process;
- When Success appears in the Status column the site-preference object definitions were successfully imported.



### Configure Woosmap Site Preferences:

- Log in to Business Manager;
- Go to Site Preferences;
- Go to Custom Preferences;
- Go to **WOOSMAP_Preferences**;
- Add all needed information.

![woosmap preferences setup](./documentation/woosmap_cartridge_setup.jpg)


## Include Woosmap Templates

### Woosmap Webapp

Include it in an ISML template of your choice
```html
<isinclude template="woosmapWebappWidget"/>
```

## Woosmap Reco Widget
Include it in an ISML template of your choice (most of the time plugged in all pages, like Header)
```html
<isinclude template="woosmapRecoWidget"/>
```