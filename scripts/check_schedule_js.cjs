'use strict';
const assert=require('node:assert/strict');const fs=require('node:fs');const path=require('node:path');
const {validate}=require('../assets/schedule-core.js');
const root=path.resolve(__dirname,'..');const report=JSON.parse(fs.readFileSync(path.join(root,'evidence/schedule-run.json'),'utf8'));
const records=[];
for(const c of report.cases){const got=validate(c.spec,c.events);assert.deepEqual(got,c.observed,`JS/Python mismatch for ${c.id}`);records.push({case:c.id,matched:true,status:got.status});}
// Meaningful boundary: touching intervals do not overlap; partial task absence does not pass.
const good=report.cases.find(c=>c.id==='repaired');
const adjacent=structuredClone(good.events);assert.equal(adjacent.find(e=>e.id==='T2').end,adjacent.find(e=>e.id==='T3').start);assert.equal(validate(good.spec,adjacent).passed,true);
const malformed=structuredClone(good.events);malformed.find(e=>e.id==='T1').start='25:00';assert.equal(validate(good.spec,malformed).passed,false);
const duplicate=structuredClone(good.events);duplicate.push(structuredClone(duplicate.find(e=>e.id==='T3')));assert.ok(validate(good.spec,duplicate).errors.some(e=>e.code==='COVERAGE'));
const result={timestamp_utc:new Date().toISOString(),runtime:'Node.js pure validator; no browser or DOM execution',python_parity_cases:records,boundaries:['adjacent intervals accepted','invalid hour rejected','duplicate task rejected'],passed:true};
fs.writeFileSync(path.join(root,'evidence/schedule-js-check.json'),JSON.stringify(result,null,2));
console.log(`SCHEDULE JS OK: ${records.length} Python parity cases + 3 boundary checks; browser UI unverified`);
