const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync(require('node:path').join(__dirname,'index.html'),'utf8').match(/<script>([\s\S]*?)<\/script>/)[1];
const context2d = new Proxy({}, { get:(_,key)=>(key==='createLinearGradient'||key==='createRadialGradient')?()=>({addColorStop(){}}):()=>{} });
const elements=new Map();
function element(){return {style:{},dataset:{},classList:{add(){},remove(){},toggle(){}},setAttribute(){},appendChild(){},addEventListener(){},focus(){},getContext:()=>context2d,querySelector:()=>element()}}
const sandbox={Image:class {complete=false},console,performance:{now:()=>0},requestAnimationFrame:()=>1,cancelAnimationFrame(){},window:{addEventListener(){}},document:{body:element(),getElementById:id=>{if(!elements.has(id))elements.set(id,element());return elements.get(id)},createElement:element,querySelectorAll:()=>[],addEventListener(){}},assert};
vm.createContext(sandbox);vm.runInContext(source,sandbox);
vm.runInContext(`
muted=true;start();
attack(game.p,game.e,'punch');assert.equal(game.p.action,'idle','countdown blocks attacks');
game.start=0;game.p.x=400;game.e.x=500;
attack(game.p,game.e,'punch');hit(game.p,game.e);assert.equal(game.e.hp,92);hit(game.p,game.e);assert.equal(game.e.hp,92,'one hit per attack');
game.p.cool=0;game.e.guard=true;attack(game.p,game.e,'kick');hit(game.p,game.e);assert.equal(game.e.hp,89,'block reduces damage');
game.p.cool=0;attack(game.p,game.e,'grab');hit(game.p,game.e);assert.equal(game.e.hp,74,'grab bypasses block');
game.p.cool=0;game.p.energy=99;attack(game.p,game.e,'super');assert.notEqual(game.p.action,'super');game.p.energy=100;attack(game.p,game.e,'super');assert.equal(game.p.energy,0);
let a=makeFighter(0,550,-1),b=makeFighter(1,500,1);resolveCollision(a,b);assert.ok(a.x>b.x);assert.equal(a.x-b.x,100);
a.x=120;b.x=140;resolveCollision(a,b);assert.equal(a.x,120);assert.equal(b.x,220);
start();game.start=0;keys.add('d');let x=game.p.x;updateF(game.p,game.e,.1,false);assert.ok(game.p.x>x);pause();assert.equal(keys.size,0);assert.equal(game.paused,true);pause();
game.p.hp=0;game.e.cool=0;attack(game.e,game.p,'punch');assert.equal(game.e.action,'idle','no attacks after knockout');finish();assert.equal(game.over,true);start();assert.equal(game.p.hp,100);assert.equal(game.over,false);
for(let i=0;i<C.length;i++){pick(i);assert.equal(playerIndex,i);assert.notEqual(playerIndex,enemyIndex);pick(i,true);assert.equal(enemyIndex,i);assert.notEqual(playerIndex,enemyIndex)}
for(let stage=0;stage<3;stage++){stageIndex=stage;start();draw();}
for(let level=0;level<3;level++){difficulty=level;start();game.start=0;game.e.x=game.p.x+110;for(let n=0;n<1200&&game.p.hp>0;n++)updateF(game.e,game.p,1/60,true);assert.ok(game.p.hp<100,'CPU attacks on each difficulty')}
start();game.start=0;game.p.cool=.1;attack(game.p,game.e,'kick');assert.equal(game.p.buffer.type,'kick');updateF(game.p,game.e,.11,false);assert.equal(game.p.action,'kick');assert.equal(game.p.buffer,null);
start();game.start=0;game.p.x=400;game.e.x=500;attack(game.p,game.e,'punch');hit(game.p,game.e);game.p.cool=0;game.t=.5;attack(game.p,game.e,'kick');hit(game.p,game.e);assert.equal(game.p.combo,2);assert.equal(game.comboLabel,'2 HIT COMBO');assert.ok(game.hitStop>0);
quit();assert.equal(game,null);
`,sandbox);
console.log('PASS: countdown, damage, single-hit, block/grab, super meter, collisions, input/pause, knockout/rematch, all fighters, all arenas, CPU difficulties, attack buffer, combos and hit-stop');
