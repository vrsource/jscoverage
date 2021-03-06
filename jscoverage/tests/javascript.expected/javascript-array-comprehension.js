if (! _$jscoverage['javascript-array-comprehension.js']) {
  _$jscoverage['javascript-array-comprehension.js'] = [];
  _$jscoverage['javascript-array-comprehension.js'][3] = 0;
  _$jscoverage['javascript-array-comprehension.js'][4] = 0;
  _$jscoverage['javascript-array-comprehension.js'][5] = 0;
  _$jscoverage['javascript-array-comprehension.js'][8] = 0;
  _$jscoverage['javascript-array-comprehension.js'][9] = 0;
  _$jscoverage['javascript-array-comprehension.js'][12] = 0;
  _$jscoverage['javascript-array-comprehension.js'][14] = 0;
}
_$jscoverage['javascript-array-comprehension.js'].source = ["<span class=\"c\">// https://developer.mozilla.org/en/New_in_JavaScript_1.7</span>","","<span class=\"k\">function</span> range<span class=\"k\">(</span>begin<span class=\"k\">,</span> end<span class=\"k\">)</span> <span class=\"k\">{</span>","  <span class=\"k\">for</span> <span class=\"k\">(</span><span class=\"k\">let</span> i <span class=\"k\">=</span> begin<span class=\"k\">;</span> i <span class=\"k\">&lt;</span> end<span class=\"k\">;</span> <span class=\"k\">++</span>i<span class=\"k\">)</span> <span class=\"k\">{</span>","    <span class=\"k\">yield</span> i<span class=\"k\">;</span>","  <span class=\"k\">}</span>","<span class=\"k\">}</span>","<span class=\"k\">var</span> ten_squares <span class=\"k\">=</span> <span class=\"k\">[</span>i <span class=\"k\">*</span> i <span class=\"k\">for</span> each <span class=\"k\">(</span>i <span class=\"k\">in</span> range<span class=\"k\">(</span><span class=\"s\">0</span><span class=\"k\">,</span> <span class=\"s\">10</span><span class=\"k\">))];</span>","<span class=\"k\">var</span> evens <span class=\"k\">=</span> <span class=\"k\">[</span>i <span class=\"k\">for</span> each <span class=\"k\">(</span>i <span class=\"k\">in</span> range<span class=\"k\">(</span><span class=\"s\">0</span><span class=\"k\">,</span> <span class=\"s\">21</span><span class=\"k\">))</span> <span class=\"k\">if</span> <span class=\"k\">(</span>i <span class=\"k\">%</span> <span class=\"s\">2</span> <span class=\"k\">==</span> <span class=\"s\">0</span><span class=\"k\">)];</span>","","<span class=\"c\">// test optimization</span>","<span class=\"k\">var</span> optimized <span class=\"k\">=</span> <span class=\"k\">[</span>i <span class=\"k\">for</span> each <span class=\"k\">(</span>i <span class=\"k\">in</span> x<span class=\"k\">)</span> <span class=\"k\">if</span> <span class=\"k\">(</span><span class=\"s\">0</span><span class=\"k\">)];</span>","","<span class=\"k\">[</span>i <span class=\"k\">for</span> each <span class=\"k\">(</span>a <span class=\"k\">in</span> x<span class=\"k\">)</span> <span class=\"k\">for</span> each <span class=\"k\">(</span>b <span class=\"k\">in</span> y<span class=\"k\">)]</span>"];
_$jscoverage['javascript-array-comprehension.js'][3]++;
function range(begin, end) {
  _$jscoverage['javascript-array-comprehension.js'][4]++;
  for (let i = begin; (i < end); (++i)) {
    _$jscoverage['javascript-array-comprehension.js'][5]++;
    (yield i);
}
}
_$jscoverage['javascript-array-comprehension.js'][8]++;
var ten_squares = [(i * i) for each (i in range(0, 10))];
_$jscoverage['javascript-array-comprehension.js'][9]++;
var evens = [i for each (i in range(0, 21)) if (((i % 2) == 0))];
_$jscoverage['javascript-array-comprehension.js'][12]++;
var optimized = [1 for each (i in x) if (0)];
_$jscoverage['javascript-array-comprehension.js'][14]++;
[i for each (a in x) for each (b in y)];
