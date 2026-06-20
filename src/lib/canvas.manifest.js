export const manifest = {
  screens: {
    scr_hie7dm: { name: "Home", route: "/", position: { "x": 160, "y": 220 } },
    scr_bcdlyv: { name: "Plugins", route: "/#plugins", position: { "x": 1560, "y": 220 } },
    scr_b0miit: { name: "Resume", route: "/#resume", position: { "x": 2960, "y": 220 } },
    scr_5mikof: { name: "Contact", route: "/#contact", position: { "x": 4360, "y": 220 } }
  },
  sections: {
    sec_05ifl8: { name: "Main Navigation", x: 0, y: 0, width: 5720, height: 1180 }
  },
  layers: [
  { kind: "section", id: "sec_05ifl8", children: [
    { kind: "screen", id: "scr_hie7dm" },
    { kind: "screen", id: "scr_bcdlyv" },
    { kind: "screen", id: "scr_b0miit" },
    { kind: "screen", id: "scr_5mikof" }]
  }]

};