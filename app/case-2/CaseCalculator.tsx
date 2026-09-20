"use client";

import { useState } from "react";

export default function CaseCalculator(){
  const [revenue,setRevenue]=useState(500);
  const [loss,setLoss]=useState(4500);
  const [revenueGrowth,setRevenueGrowth]=useState(100);
  const currentCost=revenue+loss;
  const futureRevenue=revenue*(1+revenueGrowth/100);
  const remainingGap=Math.max(0,currentCost-futureRevenue);
  return <div className="breakEvenLab"><div><span>REALITY LABS SCENARIO CALCULATOR</span><h3>Revenue growth একা যথেষ্ট, নাকি cost reduction-ও দরকার?</h3><p>এগুলো practice inputs—official Meta figures নয়। D1/D4/D5 থেকে chosen period-এর actual values বসাবে এবং unit consistent রাখবে।</p></div><div className="beInputs"><label>Segment revenue<input type="number" value={revenue} onChange={e=>setRevenue(Number(e.target.value))}/></label><label>Operating loss (positive magnitude)<input type="number" value={loss} onChange={e=>setLoss(Number(e.target.value))}/></label><label>Assumed revenue growth %<input type="number" value={revenueGrowth} onChange={e=>setRevenueGrowth(Number(e.target.value))}/></label></div><div className="beResults"><div><small>IMPLIED CURRENT COST</small><strong>{currentCost.toFixed(0)}</strong><code>Revenue + Loss</code></div><div><small>FUTURE REVENUE</small><strong>{futureRevenue.toFixed(0)}</strong><code>Revenue × (1 + growth)</code></div><div><small>REMAINING COST GAP</small><strong>{remainingGap.toFixed(0)}</strong><code>Cost − future revenue</code></div></div><p className="beCaveat">Break-even scenario causal forecast নয়। Revenue growth-এর cost, margin mix, capex, time horizon এবং management uncertainty আলাদা model করতে হবে।</p></div>;
}
