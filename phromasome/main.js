var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

let intro = "\n\n the phromasome\n  or\n two octaves of the bichrombic pitch perception double helix \n  or\n the wizard's new lute\n\n   a work in progress";

let app = new PIXI.Application({width: 800, height: 600, antialias: true});
let g = new PIXI.Graphics();
app.stage.addChild(g);
window.onload = function() {
    document.body.appendChild(app.view);
}

let style = new PIXI.TextStyle({
    fontSize: 16,
    fontFamily: 'Courier New',
    fill: '0xffffff'
});
let msg = new PIXI.Text(intro, style);
app.stage.addChild(msg);

function draw(x, y, color, glyph) {
    g.beginFill(color, 1);
    var border = 0x666666;
    // hack
    if( (y >=400 && x >= 475) || (y < 400 && x >= 325)) {
        border = 0xdddddd;
    }
    // ZEROED
    g.lineStyle(0, border);
    g.drawCircle(x, y, 10);
    g.endFill();
    let style2 = new PIXI.TextStyle({fontSize: 12, fontFamily: 'Courier New'});
    let txt = new PIXI.Text(glyph, style2);
    app.stage.addChild(txt);
    txt.x = x-4; txt.y = y-6;
}


var synth = new Tone.PolySynth(24, Tone.Synth)
    .connect(new Tone.Chorus(4, 2, 0.5))
    .toMaster();

let down = {};
let xOff = 150;
let yOff = 0;
function assignKey(key, tone, color, x, y) {
    draw(x+xOff, y, color, key);
    window.addEventListener('keydown', function(event) {
        if (!down[event.key]) {
            if (event.key == key) {
                synth.triggerAttack(tone);
            }
            down[key] = true;
        }
    });
    window.addEventListener('keyup', function(event) {
        if(down[event.key]) {
            if (event.key == key) {
                synth.triggerRelease(tone);
            }
            down[key] = false;
        }
    });
}

// earthtones and pastels
let c = {
    'eRed': 0xEA3906,
    'eOrange': 0xE96E1E,
    'eYellow': 0xE3DA09,
    'eGreen': 0x2FCB00,
    'eBlue': 0x5295FF,
    'ePurple': 0xAA00FF, 
    'pRed': 0xFF7F7B,
    'pOrange': 0xFFA82C,
    'pYellow': 0xF9FF00,
    'pGreen': 0x0BF288,
    'pBlue': 0x2FCBF6,
    'pPurple': 0xD560E0
}

assignKey('a', 'C4',  c.eRed, 25, 400);
assignKey('z', 'C#4', c.pOrange, 50, 430);
assignKey('s', 'D4',  c.eYellow, 75, 400);
assignKey('x', 'D#4', c.pGreen,100, 430);
assignKey('d', 'E4',  c.eBlue,125, 400);
assignKey('c', 'F4',  c.pPurple,150, 430);
assignKey('f', 'F#4', c.pRed,175, 400);
assignKey('v', 'G4',  c.eOrange,200, 430);
assignKey('g', 'G#4', c.pYellow,225, 400);
assignKey('b', 'A4',  c.eGreen,250, 430);
assignKey('h', 'A#4', c.pBlue,275, 400);
assignKey('n', 'B4',  c.ePurple,300, 430);

assignKey('j', 'C5',  c.eRed,325, 400);
assignKey('m', 'C#5',  c.pOrange,350, 430);
assignKey('k', 'D5',  c.eYellow,375, 400);
assignKey(',', 'D#5',  c.pGreen,400, 430);
assignKey('l', 'E5',  c.eBlue,425, 400);
assignKey('.', 'F5',  c.pPurple,450, 430);
assignKey(';', 'F#5',  c.pRed,475, 400);


//assignKey('1', 'E4',  c.eBlue,-25, 340);
assignKey('q', 'F4',  c.pPurple,0, 370);
assignKey('2', 'F#4', c.pRed,25, 340);
assignKey('w', 'G4',  c.eOrange,50, 370);
assignKey('3', 'G#4', c.pYellow,75, 340);
assignKey('e', 'A4',  c.eGreen,100, 370);
assignKey('4', 'A#4', c.pBlue,125, 340);
assignKey('r', 'B4',  c.ePurple,150, 370);

assignKey('5', 'C5',  c.eRed,175, 340);
assignKey('t', 'C#5',  c.pOrange,200, 370);
assignKey('6', 'D5',  c.eYellow,225, 340);
assignKey('y', 'D#5',  c.pGreen,250, 370);

assignKey('7', 'E5',  c.eBlue,275, 340);
assignKey('u', 'F5',  c.pPurple,300, 370);
assignKey('8', 'F#5', c.pRed,325, 340);
assignKey('i', 'G5',  c.eOrange,350, 370);
assignKey('9', 'G#5', c.pYellow,375, 340);
assignKey('o', 'A5',  c.eGreen,400, 370);
assignKey('0', 'A#5', c.pBlue,425, 340);
assignKey('p', 'B5',  c.ePurple,450, 370);



}
/*
     FILE ARCHIVED ON 04:43:01 Jul 23, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:11:10 Dec 17, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 64.647
  exclusion.robots: 0.075
  exclusion.robots.policy: 0.067
  RedisCDXSource: 2.026
  esindex: 0.006
  LoadShardBlock: 41.193 (3)
  PetaboxLoader3.datanode: 61.439 (4)
  CDXLines.iter: 18.049 (3)
  load_resource: 41.151
*/