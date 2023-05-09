# Esphome Midea Air-Conditioning -> Spruthub

## Esphome Device Configuration

* Use `esphome-midea.yaml` as the template, your need to change whose lines
 * `name: midea-air` change `midea-air` to any *unique* name, but it should be according to this pattern `midea-(.*)`, ex. midea-kitchen
 * `key: "CHANGE ME"` HomeAssistant API Key, if your doesnt have HA, check EspHome doc how to use it without HA
 * Wifi settings, setup your wifi network configuration
 * `ap` setup your name and password for fallback hotspot
 * `climate -> id` setup unique ID
 * `climate -> id` setup unique Name
 * `mqtt` setup your broker settings
 * `mqtt -> topic_prefix` setup topic prefix, it should be according to this pattern `midea-(.*)
 * Inside switch `MIDEA_AC_POWER_CONTROL` change `midea-air` to correct id from the top of configuration.
 * Send new config to your ESPHome Device

 ## SprutHub
 * Add ballu_BSYI-09HN8-ES.json [Custom Template to SprutHub](https://wiki.spruthub.ru/%D0%94%D0%BE%D0%B1%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BA%D0%B0%D1%81%D1%82%D0%BE%D0%BC%D0%BD%D1%8B%D1%85_%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD%D0%BE%D0%B2_%D0%B4%D0%BB%D1%8F_%D0%BB%D1%8E%D0%B1%D1%8B%D1%85_%D1%83%D1%81%D1%82%D1%80%D0%BE%D0%B9%D1%81%D1%82%D0%B2)
* Restart MQTT Controller and search for a new devices