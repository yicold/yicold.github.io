jQuery("#simulation")
  .on("click", ".s-fb223d7c-6b7a-43ba-9751-ca7314be22d8 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fb223d7c-6b7a-43ba-9751-ca7314be22d8 #s-Label_18": {
                      "attributes": {
                        "background-color": "#80B8F1",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-fb223d7c-6b7a-43ba-9751-ca7314be22d8 #s-Label_18": {
                      "attributes-ie": {
                        "-pie-background": "#80B8F1",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fb223d7c-6b7a-43ba-9751-ca7314be22d8 #s-Label_18": {
                      "attributes": {
                        "background-color": "#157EFB",
                        "background-image": "none",
                        "font-size": "9.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-fb223d7c-6b7a-43ba-9751-ca7314be22d8 #s-Label_18 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-fb223d7c-6b7a-43ba-9751-ca7314be22d8 #s-Label_18 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt"
                      }
                    }
                  },{
                    "#s-fb223d7c-6b7a-43ba-9751-ca7314be22d8 #s-Label_18": {
                      "attributes-ie": {
                        "-pie-background": "#157EFB",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fb223d7c-6b7a-43ba-9751-ca7314be22d8 #s-Label_19": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "font-size": "9.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-fb223d7c-6b7a-43ba-9751-ca7314be22d8 #s-Label_19 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-fb223d7c-6b7a-43ba-9751-ca7314be22d8 #s-Label_19 span": {
                      "attributes": {
                        "color": "#157EFB",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt"
                      }
                    }
                  },{
                    "#s-fb223d7c-6b7a-43ba-9751-ca7314be22d8 #s-Label_19": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fb223d7c-6b7a-43ba-9751-ca7314be22d8 #s-Label_18": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "font-size": "9.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-fb223d7c-6b7a-43ba-9751-ca7314be22d8 #s-Label_18 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-fb223d7c-6b7a-43ba-9751-ca7314be22d8 #s-Label_18 span": {
                      "attributes": {
                        "color": "#157EFB",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt"
                      }
                    }
                  },{
                    "#s-fb223d7c-6b7a-43ba-9751-ca7314be22d8 #s-Label_18": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fb223d7c-6b7a-43ba-9751-ca7314be22d8 #s-Label_19": {
                      "attributes": {
                        "background-color": "#80B8F1",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-fb223d7c-6b7a-43ba-9751-ca7314be22d8 #s-Label_19": {
                      "attributes-ie": {
                        "-pie-background": "#80B8F1",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fb223d7c-6b7a-43ba-9751-ca7314be22d8 #s-Label_19": {
                      "attributes": {
                        "background-color": "#157EFB",
                        "background-image": "none",
                        "font-size": "9.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-fb223d7c-6b7a-43ba-9751-ca7314be22d8 #s-Label_19 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-fb223d7c-6b7a-43ba-9751-ca7314be22d8 #s-Label_19 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt"
                      }
                    }
                  },{
                    "#s-fb223d7c-6b7a-43ba-9751-ca7314be22d8 #s-Label_19": {
                      "attributes-ie": {
                        "-pie-background": "#157EFB",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true,
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/61afcbd6-0be3-4b59-8da8-ee68eef22fbe",
                    "transition": "pop"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/fdca1c40-3086-40e4-aa71-bb42f153f012",
                    "transition": "pop"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });