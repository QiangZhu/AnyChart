if(!_.cartesian){_.cartesian=1;(function($){var JL=function(a,b,c){var d=["whiskerWidth","hoverWhiskerWidth","selectWhiskerWidth"];if(2==c){var e=a.Da;var f="selected"}else 1==c?(e=a.ya,f="hovered"):(e=a.ca,f="normal");f=b.get(f);b=$.On($.p(f)?f[d[0]]:void 0,b.get(d[c]),e.i(d[0]));null!=b||(b=a.ca.i(d[0]));return $.M(b,a.ks)},KL=function(a){$.$y.call(this,a)},LL=function(){$.cA.call(this);this.Ia("cartesian");$.R(this.xa,[["categorizedBySeries",327680,1]]);this.Zd="cartesian"},ML=function(){var a=new LL;a.pa("defaultSeriesType","line");a.pe();
a.ug();return a},NL=function(a){var b=new LL;b.Ia("area");b.pa("defaultSeriesType","area");b.Zd="area";b.ug();b.pe();for(var c=0,d=arguments.length;c<d;c++)b.area(arguments[c]);return b},OL=function(a){var b=new LL;b.Ia("bar");b.pa("defaultSeriesType","bar");b.Zd="bar";b.ug();b.pe();for(var c=0,d=arguments.length;c<d;c++)b.bar(arguments[c]);return b},PL=function(a){var b=new LL;b.Ia("box");b.pa("defaultSeriesType","box");b.Zd="box";b.ug();b.pe();for(var c=0,d=arguments.length;c<d;c++)b.box(arguments[c]);
return b},QL=function(a){var b=new LL;b.Ia("column");b.pa("defaultSeriesType","column");b.Zd="column";b.ug();b.pe();for(var c=0,d=arguments.length;c<d;c++)b.column(arguments[c]);return b},RL=function(a){var b=new LL;b.Ia("column");b.pa("defaultSeriesType","hilo");b.Zd="hilo";b.ug();b.pe();for(var c=0,d=arguments.length;c<d;c++)b.hilo(arguments[c]);return b},SL=function(a){$.Uj(405,null,["anychart.financial()","anychart.ohlc() or anychart.candlestick()"],!0);var b=new LL;b.Ia("financial");b.pa("defaultSeriesType",
"candlestick");b.Zd="financial";b.ug();b.pe();for(var c=0,d=arguments.length;c<d;c++)b.candlestick(arguments[c]);return b},TL=function(a){var b=new LL;b.Ia("line");b.pa("defaultSeriesType","line");b.Zd="line";b.ug();b.pe();for(var c=0,d=arguments.length;c<d;c++)b.line(arguments[c]);return b},UL=function(a){var b=new LL;b.Ia("verticalArea");b.pa("defaultSeriesType","area");b.Zd="vertical-area";b.ug();b.pe();for(var c=0,d=arguments.length;c<d;c++)b.area(arguments[c]);return b},VL=function(a){var b=
new LL;b.Ia("verticalLine");b.pa("defaultSeriesType","line");b.Zd="vertical-line";b.ug();b.pe();for(var c=0,d=arguments.length;c<d;c++)b.line(arguments[c]);return b},WL=function(a){var b=new LL;b.Ia("line","stick");b.pa("defaultSeriesType","stick");b.Zd="stick";b.ug();b.pe();for(var c=0,d=arguments.length;c<d;c++)b.stick(arguments[c]);return b},XL=function(a){var b=new LL;b.Ia("line","jumpLine");b.pa("defaultSeriesType","jump-line");b.Zd="jump-line";b.ug();b.pe();for(var c=$.el("jump-line"),d=0,e=
arguments.length;d<e;d++)b[c](arguments[d]);return b},YL=function(a){var b=new LL;b.Ia("line","stepLine");b.pa("defaultSeriesType","step-line");b.Zd="step-line";b.ug();b.pe();for(var c=$.el("step-line"),d=0,e=arguments.length;d<e;d++)b[c](arguments[d]);return b},ZL=function(a){var b=new LL;b.Ia("financial","ohlc");b.pa("defaultSeriesType","ohlc");b.Zd="ohlc";b.ug();b.pe();for(var c=0,d=arguments.length;c<d;c++)b.ohlc(arguments[c]);return b},$L=function(a){var b=new LL;b.Ia("financial","candlestick");
b.pa("defaultSeriesType","candlestick");b.Zd="candlestick";b.ug();b.pe();for(var c=0,d=arguments.length;c<d;c++)b.candlestick(arguments[c]);return b};$.Qy.prototype.fC=$.ca(17,function(){return this.Lf.length});$.Qy.prototype.dC=$.ca(16,function(){return this.b.length});$.aM={name:"median",Lb:"path",Pb:null,Rb:"medianStroke",Vb:!0,Ab:!1,zIndex:2E-6};$.bM={name:"stem",Lb:"path",Pb:null,Rb:"stemStroke",Vb:!0,Ab:!1,zIndex:2E-6};$.cM={name:"whisker",Lb:"path",Pb:null,Rb:"whiskerStroke",Vb:!0,Ab:!1,zIndex:2E-6};
$.H(KL,$.$y);$.mE[3]=KL;$.g=KL.prototype;$.g.type=3;$.g.flags=263936;$.g.lh={path:"path",hatchFill:"path",median:"path",stem:"path",whisker:"path"};$.g.$o=["lowest","q1","median","q3","highest"];
$.g.Pf=function(a,b){var c=this.Pc.Sc(b),d=a.j("x"),e=a.j("lowest"),f=a.j("q1"),h=a.j("median"),k=a.j("q3"),l=a.j("highest"),m=JL(this.W,a,b)/2,n=this.o/2,q=c.path;$.Yy(q,this.sa,d-n,f);$.Zy(q,this.sa,d+n,f,d+n,k,d-n,k);q.close();q=c.hatchFill;$.Yy(q,this.sa,d-n,f);$.Zy(q,this.sa,d+n,f,d+n,k,d-n,k);q.close();q=c.median;$.Yy(q,this.sa,d-n,h);$.Zy(q,this.sa,d+n,h);q=c.stem;$.Yy(q,this.sa,d,e);$.Zy(q,this.sa,d,f);$.Yy(q,this.sa,d,k);$.Zy(q,this.sa,d,l);q=c.whisker;$.Yy(q,this.sa,d-m,e);$.Zy(q,this.sa,
d+m,e);$.Yy(q,this.sa,d-m,l);$.Zy(q,this.sa,d+m,l)};$.g.EA=function(a,b){var c=a.j("shapes");if(c){var d=a.j("x"),e=a.j("lowest"),f=a.j("highest"),h=JL(this.W,a,b)/2;c=c.whisker;c.clear();$.Yy(c,this.sa,d-h,e);$.Zy(c,this.sa,d+h,e);$.Yy(c,this.sa,d-h,f);$.Zy(c,this.sa,d+h,f)}};$.H(LL,$.cA);var dM={},eM=$.nE|7864320;dM.area={zb:1,Db:1,Ib:[$.LE,$.dF,$.ZE,$.TE,$.KE,$.eF,$.$E,$.SE,$.NE,$.fF,$.aF,$.gF],Hb:null,Bb:null,vb:eM,Cb:"value",wb:"zero"};dM.bar={zb:6,Db:2,Ib:[$.nF,$.NE,$.VE,$.gF,$.XE,$.aF,$.bF,$.fF],Hb:null,Bb:null,vb:eM,Cb:"value",wb:"zero"};dM.box={zb:3,Db:2,Ib:[$.nF,$.NE,$.aM,$.bM,$.cM],Hb:null,Bb:null,vb:eM,Cb:"highest",wb:"lowest"};dM.bubble={zb:4,Db:2,Ib:[$.QE,$.RE,$.UE,$.WE],Hb:null,Bb:null,vb:eM,Cb:"value",wb:"value"};
dM.candlestick={zb:5,Db:2,Ib:[$.XE,$.aF,$.bF,$.fF],Hb:null,Bb:null,vb:eM,Cb:"high",wb:"low"};dM.column={zb:6,Db:2,Ib:[$.nF,$.NE,$.VE,$.gF,$.XE,$.aF,$.bF,$.fF],Hb:null,Bb:null,vb:eM,Cb:"value",wb:"zero"};dM["jump-line"]={zb:19,Db:2,Ib:[$.LE,$.cF,$.YE,$.ME],Hb:null,Bb:null,vb:eM,Cb:"value",wb:"value"};dM.line={zb:8,Db:1,Ib:[$.LE,$.dF,$.ZE,$.TE],Hb:null,Bb:null,vb:eM,Cb:"value",wb:"value"};dM.marker={zb:9,Db:2,Ib:[$.nF,$.NE,$.VE,$.gF,$.XE,$.aF,$.bF,$.fF],Hb:null,Bb:null,vb:$.nE|3670016,Cb:"value",wb:"value"};
dM.ohlc={zb:10,Db:2,Ib:[$.YE,$.cF],Hb:null,Bb:null,vb:eM,Cb:"high",wb:"low"};dM["range-area"]={zb:11,Db:1,Ib:[$.KE,$.mF,$.iF,$.NE,$.hF,$.lF,$.PE,$.OE],Hb:null,Bb:null,vb:eM,Cb:"high",wb:"low"};dM["range-bar"]={zb:12,Db:2,Ib:[$.nF,$.NE,$.jF,$.kF,$.PE,$.OE],Hb:null,Bb:null,vb:eM,Cb:"high",wb:"low"};dM["range-column"]={zb:12,Db:2,Ib:[$.nF,$.NE,$.jF,$.kF,$.PE,$.OE],Hb:null,Bb:null,vb:eM,Cb:"high",wb:"low"};
dM["range-spline-area"]={zb:13,Db:1,Ib:[$.KE,$.iF,$.mF,$.NE,$.hF,$.lF,$.PE,$.OE],Hb:null,Bb:null,vb:eM,Cb:"high",wb:"low"};dM["range-step-area"]={zb:14,Db:1,Ib:[$.KE,$.NE,$.iF,$.mF],Hb:null,Bb:null,vb:eM,Cb:"high",wb:"low"};dM.spline={zb:15,Db:1,Ib:[$.LE,$.dF,$.ZE,$.TE],Hb:null,Bb:null,vb:eM,Cb:"value",wb:"value"};dM["spline-area"]={zb:16,Db:1,Ib:[$.LE,$.dF,$.ZE,$.TE,$.KE,$.eF,$.$E,$.SE,$.NE,$.fF,$.aF,$.gF],Hb:null,Bb:null,vb:eM,Cb:"value",wb:"zero"};
dM["step-area"]={zb:17,Db:1,Ib:[$.LE,$.dF,$.ZE,$.TE,$.KE,$.eF,$.$E,$.SE,$.NE,$.fF,$.aF,$.gF],Hb:null,Bb:null,vb:eM,Cb:"value",wb:"zero"};dM["step-line"]={zb:18,Db:1,Ib:[$.LE,$.dF,$.ZE,$.TE],Hb:null,Bb:null,vb:eM,Cb:"value",wb:"value"};dM.stick={zb:20,Db:2,Ib:[$.LE,$.cF,$.YE,$.ME],Hb:null,Bb:null,vb:eM,Cb:"value",wb:"zero"};dM.hilo={zb:31,Db:2,Ib:[$.LE,$.iF,$.mF],Hb:null,Bb:null,vb:eM,Cb:"high",wb:"low"};LL.prototype.Bi=dM;$.ay(LL,LL.prototype.Bi);
LL.prototype.fL=function(a){var b=a.enabled(),c=a.mm||[],d=!0;(a=a.data()?a.data().Eb():0)&&a!=c.length||(d=!1);return b&&d};LL.prototype.lP=function(a,b,c,d){if(this.i("categorizedBySeries")){d=b.length;var e=[],f={};for(c=0;c<d;c++){var h=b[c].W.name();e.push(h);h=$.fn(h);f[h]=c}a.FA=f;a.Hg=e}else LL.B.lP.call(this,a,b,c,d)};LL.prototype.LQ=function(a,b){this.i("categorizedBySeries")||LL.B.LQ.call(this,a,b)};var fM={};$.ep(fM,[[0,"categorizedBySeries",$.op]]);$.S(LL,fM);
LL.prototype.F=function(){var a=LL.B.F.call(this);$.Bp(this,fM,a.chart);return a};LL.prototype.Y=function(a,b){LL.B.Y.call(this,a,b);$.tp(this,fM,a)};$.Fo.cartesian=ML;var gM=LL.prototype;$.F("anychart.cartesian",ML);gM.xScale=gM.Wa;gM.yScale=gM.bb;gM.crosshair=gM.Mg;gM.xGrid=gM.Im;gM.yGrid=gM.Jm;gM.xMinorGrid=gM.dr;gM.yMinorGrid=gM.gr;gM.xAxis=gM.ah;gM.getXAxesCount=gM.dC;gM.yAxis=gM.fi;gM.getYAxesCount=gM.fC;gM.getSeries=gM.Oe;gM.lineMarker=gM.um;gM.rangeMarker=gM.Cm;gM.textMarker=gM.Gm;
gM.palette=gM.Yb;gM.markerPalette=gM.lf;gM.hatchFillPalette=gM.be;gM.getType=gM.Qa;gM.addSeries=gM.Ak;gM.getSeriesAt=gM.Zh;gM.getSeriesCount=gM.jk;gM.removeSeries=gM.Vn;gM.removeSeriesAt=gM.nn;gM.removeAllSeries=gM.Ro;gM.getPlotBounds=gM.ag;gM.xZoom=gM.fq;gM.yZoom=gM.gq;gM.xScroller=gM.Zo;gM.yScroller=gM.ir;gM.getStat=gM.pg;gM.annotations=gM.bk;gM.getXScales=gM.lx;gM.getYScales=gM.nx;$.Fo.area=NL;$.Fo.bar=OL;$.Fo.box=PL;$.Fo.column=QL;$.Fo.hilo=RL;$.Fo.financial=SL;$.Fo.line=TL;$.Fo["vertical-area"]=UL;$.Fo["vertical-line"]=VL;$.Fo.stick=WL;$.Fo["jump-line"]=XL;$.Fo["step-line"]=YL;$.Fo.ohlc=ZL;$.Fo.candlestick=$L;$.F("anychart.area",NL);$.F("anychart.bar",OL);$.F("anychart.vertical",OL);$.F("anychart.box",PL);$.F("anychart.column",QL);$.F("anychart.hilo",RL);$.F("anychart.financial",SL);$.F("anychart.ohlc",ZL);$.F("anychart.candlestick",$L);$.F("anychart.stick",WL);
$.F("anychart.jumpLine",XL);$.F("anychart.stepLine",YL);$.F("anychart.line",TL);$.F("anychart.verticalArea",UL);$.F("anychart.verticalLine",VL);}).call(this,$)}
