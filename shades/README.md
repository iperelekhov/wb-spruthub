# Wirenboard -> Spruthub Shades

This set of scripts allows you to integrate phase controlled roll shades motor (such as Dooya DM35s) controlled by WBIO-DO-R10R-4 from Wirenboard into Spruthub.

## Wirenboard

* Place the file `shades.js` into wb-rules directory
* Now, your need to configure some settings inside this file, take a look at `virtualShades`, here your need to setup your shades
    * code - unique code of your shades. It must be in format - rollshade_[0-9], ex. rollshade_1
    * title - User Friendly Title
    * realDeviceName - WBIO-DO-R10R-4 module name at Wirenboard
    * chanelId - WBIO-DO-R10R- has 4 channels (which means up to 4 motors are supported), number from 1 to 4
    * timeToOpen - time full shades open (from 0 to 100 or visa versa), in milliseconds.
## SprutHub

* Add virtual_shades10.json [Custom Template to SprutHub](https://wiki.spruthub.ru/%D0%94%D0%BE%D0%B1%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BA%D0%B0%D1%81%D1%82%D0%BE%D0%BC%D0%BD%D1%8B%D1%85_%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD%D0%BE%D0%B2_%D0%B4%D0%BB%D1%8F_%D0%BB%D1%8E%D0%B1%D1%8B%D1%85_%D1%83%D1%81%D1%82%D1%80%D0%BE%D0%B9%D1%81%D1%82%D0%B2)
* Restart MQTT Controller and search for a new devices