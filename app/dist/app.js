/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([590,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 105:
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ 1132:
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),

/***/ 1208:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Binary_Property/ASCII.js": 1209,
	"./Binary_Property/ASCII_Hex_Digit.js": 1210,
	"./Binary_Property/Alphabetic.js": 1211,
	"./Binary_Property/Any.js": 1212,
	"./Binary_Property/Assigned.js": 1213,
	"./Binary_Property/Bidi_Control.js": 1214,
	"./Binary_Property/Bidi_Mirrored.js": 1215,
	"./Binary_Property/Case_Ignorable.js": 1216,
	"./Binary_Property/Cased.js": 1217,
	"./Binary_Property/Changes_When_Casefolded.js": 1218,
	"./Binary_Property/Changes_When_Casemapped.js": 1219,
	"./Binary_Property/Changes_When_Lowercased.js": 1220,
	"./Binary_Property/Changes_When_NFKC_Casefolded.js": 1221,
	"./Binary_Property/Changes_When_Titlecased.js": 1222,
	"./Binary_Property/Changes_When_Uppercased.js": 1223,
	"./Binary_Property/Dash.js": 1224,
	"./Binary_Property/Default_Ignorable_Code_Point.js": 1225,
	"./Binary_Property/Deprecated.js": 1226,
	"./Binary_Property/Diacritic.js": 1227,
	"./Binary_Property/Emoji.js": 1228,
	"./Binary_Property/Emoji_Component.js": 1229,
	"./Binary_Property/Emoji_Modifier.js": 1230,
	"./Binary_Property/Emoji_Modifier_Base.js": 1231,
	"./Binary_Property/Emoji_Presentation.js": 1232,
	"./Binary_Property/Extended_Pictographic.js": 1233,
	"./Binary_Property/Extender.js": 1234,
	"./Binary_Property/Grapheme_Base.js": 1235,
	"./Binary_Property/Grapheme_Extend.js": 1236,
	"./Binary_Property/Hex_Digit.js": 1237,
	"./Binary_Property/IDS_Binary_Operator.js": 1238,
	"./Binary_Property/IDS_Trinary_Operator.js": 1239,
	"./Binary_Property/ID_Continue.js": 1240,
	"./Binary_Property/ID_Start.js": 1241,
	"./Binary_Property/Ideographic.js": 1242,
	"./Binary_Property/Join_Control.js": 1243,
	"./Binary_Property/Logical_Order_Exception.js": 1244,
	"./Binary_Property/Lowercase.js": 1245,
	"./Binary_Property/Math.js": 1246,
	"./Binary_Property/Noncharacter_Code_Point.js": 1247,
	"./Binary_Property/Pattern_Syntax.js": 1248,
	"./Binary_Property/Pattern_White_Space.js": 1249,
	"./Binary_Property/Quotation_Mark.js": 1250,
	"./Binary_Property/Radical.js": 1251,
	"./Binary_Property/Regional_Indicator.js": 1252,
	"./Binary_Property/Sentence_Terminal.js": 1253,
	"./Binary_Property/Soft_Dotted.js": 1254,
	"./Binary_Property/Terminal_Punctuation.js": 1255,
	"./Binary_Property/Unified_Ideograph.js": 1256,
	"./Binary_Property/Uppercase.js": 1257,
	"./Binary_Property/Variation_Selector.js": 1258,
	"./Binary_Property/White_Space.js": 1259,
	"./Binary_Property/XID_Continue.js": 1260,
	"./Binary_Property/XID_Start.js": 1261,
	"./General_Category/Cased_Letter.js": 1262,
	"./General_Category/Close_Punctuation.js": 1263,
	"./General_Category/Connector_Punctuation.js": 1264,
	"./General_Category/Control.js": 1265,
	"./General_Category/Currency_Symbol.js": 1266,
	"./General_Category/Dash_Punctuation.js": 1267,
	"./General_Category/Decimal_Number.js": 1268,
	"./General_Category/Enclosing_Mark.js": 1269,
	"./General_Category/Final_Punctuation.js": 1270,
	"./General_Category/Format.js": 1271,
	"./General_Category/Initial_Punctuation.js": 1272,
	"./General_Category/Letter.js": 1273,
	"./General_Category/Letter_Number.js": 1274,
	"./General_Category/Line_Separator.js": 1275,
	"./General_Category/Lowercase_Letter.js": 1276,
	"./General_Category/Mark.js": 1277,
	"./General_Category/Math_Symbol.js": 1278,
	"./General_Category/Modifier_Letter.js": 1279,
	"./General_Category/Modifier_Symbol.js": 1280,
	"./General_Category/Nonspacing_Mark.js": 1281,
	"./General_Category/Number.js": 1282,
	"./General_Category/Open_Punctuation.js": 1283,
	"./General_Category/Other.js": 1284,
	"./General_Category/Other_Letter.js": 1285,
	"./General_Category/Other_Number.js": 1286,
	"./General_Category/Other_Punctuation.js": 1287,
	"./General_Category/Other_Symbol.js": 1288,
	"./General_Category/Paragraph_Separator.js": 1289,
	"./General_Category/Private_Use.js": 1290,
	"./General_Category/Punctuation.js": 1291,
	"./General_Category/Separator.js": 1292,
	"./General_Category/Space_Separator.js": 1293,
	"./General_Category/Spacing_Mark.js": 1294,
	"./General_Category/Surrogate.js": 1295,
	"./General_Category/Symbol.js": 1296,
	"./General_Category/Titlecase_Letter.js": 1297,
	"./General_Category/Unassigned.js": 1298,
	"./General_Category/Uppercase_Letter.js": 1299,
	"./Script/Adlam.js": 1300,
	"./Script/Ahom.js": 1301,
	"./Script/Anatolian_Hieroglyphs.js": 1302,
	"./Script/Arabic.js": 1303,
	"./Script/Armenian.js": 1304,
	"./Script/Avestan.js": 1305,
	"./Script/Balinese.js": 1306,
	"./Script/Bamum.js": 1307,
	"./Script/Bassa_Vah.js": 1308,
	"./Script/Batak.js": 1309,
	"./Script/Bengali.js": 1310,
	"./Script/Bhaiksuki.js": 1311,
	"./Script/Bopomofo.js": 1312,
	"./Script/Brahmi.js": 1313,
	"./Script/Braille.js": 1314,
	"./Script/Buginese.js": 1315,
	"./Script/Buhid.js": 1316,
	"./Script/Canadian_Aboriginal.js": 1317,
	"./Script/Carian.js": 1318,
	"./Script/Caucasian_Albanian.js": 1319,
	"./Script/Chakma.js": 1320,
	"./Script/Cham.js": 1321,
	"./Script/Cherokee.js": 1322,
	"./Script/Common.js": 1323,
	"./Script/Coptic.js": 1324,
	"./Script/Cuneiform.js": 1325,
	"./Script/Cypriot.js": 1326,
	"./Script/Cyrillic.js": 1327,
	"./Script/Deseret.js": 1328,
	"./Script/Devanagari.js": 1329,
	"./Script/Dogra.js": 1330,
	"./Script/Duployan.js": 1331,
	"./Script/Egyptian_Hieroglyphs.js": 1332,
	"./Script/Elbasan.js": 1333,
	"./Script/Elymaic.js": 1334,
	"./Script/Ethiopic.js": 1335,
	"./Script/Georgian.js": 1336,
	"./Script/Glagolitic.js": 1337,
	"./Script/Gothic.js": 1338,
	"./Script/Grantha.js": 1339,
	"./Script/Greek.js": 1340,
	"./Script/Gujarati.js": 1341,
	"./Script/Gunjala_Gondi.js": 1342,
	"./Script/Gurmukhi.js": 1343,
	"./Script/Han.js": 1344,
	"./Script/Hangul.js": 1345,
	"./Script/Hanifi_Rohingya.js": 1346,
	"./Script/Hanunoo.js": 1347,
	"./Script/Hatran.js": 1348,
	"./Script/Hebrew.js": 1349,
	"./Script/Hiragana.js": 1350,
	"./Script/Imperial_Aramaic.js": 1351,
	"./Script/Inherited.js": 1352,
	"./Script/Inscriptional_Pahlavi.js": 1353,
	"./Script/Inscriptional_Parthian.js": 1354,
	"./Script/Javanese.js": 1355,
	"./Script/Kaithi.js": 1356,
	"./Script/Kannada.js": 1357,
	"./Script/Katakana.js": 1358,
	"./Script/Kayah_Li.js": 1359,
	"./Script/Kharoshthi.js": 1360,
	"./Script/Khmer.js": 1361,
	"./Script/Khojki.js": 1362,
	"./Script/Khudawadi.js": 1363,
	"./Script/Lao.js": 1364,
	"./Script/Latin.js": 1365,
	"./Script/Lepcha.js": 1366,
	"./Script/Limbu.js": 1367,
	"./Script/Linear_A.js": 1368,
	"./Script/Linear_B.js": 1369,
	"./Script/Lisu.js": 1370,
	"./Script/Lycian.js": 1371,
	"./Script/Lydian.js": 1372,
	"./Script/Mahajani.js": 1373,
	"./Script/Makasar.js": 1374,
	"./Script/Malayalam.js": 1375,
	"./Script/Mandaic.js": 1376,
	"./Script/Manichaean.js": 1377,
	"./Script/Marchen.js": 1378,
	"./Script/Masaram_Gondi.js": 1379,
	"./Script/Medefaidrin.js": 1380,
	"./Script/Meetei_Mayek.js": 1381,
	"./Script/Mende_Kikakui.js": 1382,
	"./Script/Meroitic_Cursive.js": 1383,
	"./Script/Meroitic_Hieroglyphs.js": 1384,
	"./Script/Miao.js": 1385,
	"./Script/Modi.js": 1386,
	"./Script/Mongolian.js": 1387,
	"./Script/Mro.js": 1388,
	"./Script/Multani.js": 1389,
	"./Script/Myanmar.js": 1390,
	"./Script/Nabataean.js": 1391,
	"./Script/Nandinagari.js": 1392,
	"./Script/New_Tai_Lue.js": 1393,
	"./Script/Newa.js": 1394,
	"./Script/Nko.js": 1395,
	"./Script/Nushu.js": 1396,
	"./Script/Nyiakeng_Puachue_Hmong.js": 1397,
	"./Script/Ogham.js": 1398,
	"./Script/Ol_Chiki.js": 1399,
	"./Script/Old_Hungarian.js": 1400,
	"./Script/Old_Italic.js": 1401,
	"./Script/Old_North_Arabian.js": 1402,
	"./Script/Old_Permic.js": 1403,
	"./Script/Old_Persian.js": 1404,
	"./Script/Old_Sogdian.js": 1405,
	"./Script/Old_South_Arabian.js": 1406,
	"./Script/Old_Turkic.js": 1407,
	"./Script/Oriya.js": 1408,
	"./Script/Osage.js": 1409,
	"./Script/Osmanya.js": 1410,
	"./Script/Pahawh_Hmong.js": 1411,
	"./Script/Palmyrene.js": 1412,
	"./Script/Pau_Cin_Hau.js": 1413,
	"./Script/Phags_Pa.js": 1414,
	"./Script/Phoenician.js": 1415,
	"./Script/Psalter_Pahlavi.js": 1416,
	"./Script/Rejang.js": 1417,
	"./Script/Runic.js": 1418,
	"./Script/Samaritan.js": 1419,
	"./Script/Saurashtra.js": 1420,
	"./Script/Sharada.js": 1421,
	"./Script/Shavian.js": 1422,
	"./Script/Siddham.js": 1423,
	"./Script/SignWriting.js": 1424,
	"./Script/Sinhala.js": 1425,
	"./Script/Sogdian.js": 1426,
	"./Script/Sora_Sompeng.js": 1427,
	"./Script/Soyombo.js": 1428,
	"./Script/Sundanese.js": 1429,
	"./Script/Syloti_Nagri.js": 1430,
	"./Script/Syriac.js": 1431,
	"./Script/Tagalog.js": 1432,
	"./Script/Tagbanwa.js": 1433,
	"./Script/Tai_Le.js": 1434,
	"./Script/Tai_Tham.js": 1435,
	"./Script/Tai_Viet.js": 1436,
	"./Script/Takri.js": 1437,
	"./Script/Tamil.js": 1438,
	"./Script/Tangut.js": 1439,
	"./Script/Telugu.js": 1440,
	"./Script/Thaana.js": 1441,
	"./Script/Thai.js": 1442,
	"./Script/Tibetan.js": 1443,
	"./Script/Tifinagh.js": 1444,
	"./Script/Tirhuta.js": 1445,
	"./Script/Ugaritic.js": 1446,
	"./Script/Vai.js": 1447,
	"./Script/Wancho.js": 1448,
	"./Script/Warang_Citi.js": 1449,
	"./Script/Yi.js": 1450,
	"./Script/Zanabazar_Square.js": 1451,
	"./Script_Extensions/Adlam.js": 1452,
	"./Script_Extensions/Ahom.js": 1453,
	"./Script_Extensions/Anatolian_Hieroglyphs.js": 1454,
	"./Script_Extensions/Arabic.js": 1455,
	"./Script_Extensions/Armenian.js": 1456,
	"./Script_Extensions/Avestan.js": 1457,
	"./Script_Extensions/Balinese.js": 1458,
	"./Script_Extensions/Bamum.js": 1459,
	"./Script_Extensions/Bassa_Vah.js": 1460,
	"./Script_Extensions/Batak.js": 1461,
	"./Script_Extensions/Bengali.js": 1462,
	"./Script_Extensions/Bhaiksuki.js": 1463,
	"./Script_Extensions/Bopomofo.js": 1464,
	"./Script_Extensions/Brahmi.js": 1465,
	"./Script_Extensions/Braille.js": 1466,
	"./Script_Extensions/Buginese.js": 1467,
	"./Script_Extensions/Buhid.js": 1468,
	"./Script_Extensions/Canadian_Aboriginal.js": 1469,
	"./Script_Extensions/Carian.js": 1470,
	"./Script_Extensions/Caucasian_Albanian.js": 1471,
	"./Script_Extensions/Chakma.js": 1472,
	"./Script_Extensions/Cham.js": 1473,
	"./Script_Extensions/Cherokee.js": 1474,
	"./Script_Extensions/Common.js": 1475,
	"./Script_Extensions/Coptic.js": 1476,
	"./Script_Extensions/Cuneiform.js": 1477,
	"./Script_Extensions/Cypriot.js": 1478,
	"./Script_Extensions/Cyrillic.js": 1479,
	"./Script_Extensions/Deseret.js": 1480,
	"./Script_Extensions/Devanagari.js": 1481,
	"./Script_Extensions/Dogra.js": 1482,
	"./Script_Extensions/Duployan.js": 1483,
	"./Script_Extensions/Egyptian_Hieroglyphs.js": 1484,
	"./Script_Extensions/Elbasan.js": 1485,
	"./Script_Extensions/Elymaic.js": 1486,
	"./Script_Extensions/Ethiopic.js": 1487,
	"./Script_Extensions/Georgian.js": 1488,
	"./Script_Extensions/Glagolitic.js": 1489,
	"./Script_Extensions/Gothic.js": 1490,
	"./Script_Extensions/Grantha.js": 1491,
	"./Script_Extensions/Greek.js": 1492,
	"./Script_Extensions/Gujarati.js": 1493,
	"./Script_Extensions/Gunjala_Gondi.js": 1494,
	"./Script_Extensions/Gurmukhi.js": 1495,
	"./Script_Extensions/Han.js": 1496,
	"./Script_Extensions/Hangul.js": 1497,
	"./Script_Extensions/Hanifi_Rohingya.js": 1498,
	"./Script_Extensions/Hanunoo.js": 1499,
	"./Script_Extensions/Hatran.js": 1500,
	"./Script_Extensions/Hebrew.js": 1501,
	"./Script_Extensions/Hiragana.js": 1502,
	"./Script_Extensions/Imperial_Aramaic.js": 1503,
	"./Script_Extensions/Inherited.js": 1504,
	"./Script_Extensions/Inscriptional_Pahlavi.js": 1505,
	"./Script_Extensions/Inscriptional_Parthian.js": 1506,
	"./Script_Extensions/Javanese.js": 1507,
	"./Script_Extensions/Kaithi.js": 1508,
	"./Script_Extensions/Kannada.js": 1509,
	"./Script_Extensions/Katakana.js": 1510,
	"./Script_Extensions/Kayah_Li.js": 1511,
	"./Script_Extensions/Kharoshthi.js": 1512,
	"./Script_Extensions/Khmer.js": 1513,
	"./Script_Extensions/Khojki.js": 1514,
	"./Script_Extensions/Khudawadi.js": 1515,
	"./Script_Extensions/Lao.js": 1516,
	"./Script_Extensions/Latin.js": 1517,
	"./Script_Extensions/Lepcha.js": 1518,
	"./Script_Extensions/Limbu.js": 1519,
	"./Script_Extensions/Linear_A.js": 1520,
	"./Script_Extensions/Linear_B.js": 1521,
	"./Script_Extensions/Lisu.js": 1522,
	"./Script_Extensions/Lycian.js": 1523,
	"./Script_Extensions/Lydian.js": 1524,
	"./Script_Extensions/Mahajani.js": 1525,
	"./Script_Extensions/Makasar.js": 1526,
	"./Script_Extensions/Malayalam.js": 1527,
	"./Script_Extensions/Mandaic.js": 1528,
	"./Script_Extensions/Manichaean.js": 1529,
	"./Script_Extensions/Marchen.js": 1530,
	"./Script_Extensions/Masaram_Gondi.js": 1531,
	"./Script_Extensions/Medefaidrin.js": 1532,
	"./Script_Extensions/Meetei_Mayek.js": 1533,
	"./Script_Extensions/Mende_Kikakui.js": 1534,
	"./Script_Extensions/Meroitic_Cursive.js": 1535,
	"./Script_Extensions/Meroitic_Hieroglyphs.js": 1536,
	"./Script_Extensions/Miao.js": 1537,
	"./Script_Extensions/Modi.js": 1538,
	"./Script_Extensions/Mongolian.js": 1539,
	"./Script_Extensions/Mro.js": 1540,
	"./Script_Extensions/Multani.js": 1541,
	"./Script_Extensions/Myanmar.js": 1542,
	"./Script_Extensions/Nabataean.js": 1543,
	"./Script_Extensions/Nandinagari.js": 1544,
	"./Script_Extensions/New_Tai_Lue.js": 1545,
	"./Script_Extensions/Newa.js": 1546,
	"./Script_Extensions/Nko.js": 1547,
	"./Script_Extensions/Nushu.js": 1548,
	"./Script_Extensions/Nyiakeng_Puachue_Hmong.js": 1549,
	"./Script_Extensions/Ogham.js": 1550,
	"./Script_Extensions/Ol_Chiki.js": 1551,
	"./Script_Extensions/Old_Hungarian.js": 1552,
	"./Script_Extensions/Old_Italic.js": 1553,
	"./Script_Extensions/Old_North_Arabian.js": 1554,
	"./Script_Extensions/Old_Permic.js": 1555,
	"./Script_Extensions/Old_Persian.js": 1556,
	"./Script_Extensions/Old_Sogdian.js": 1557,
	"./Script_Extensions/Old_South_Arabian.js": 1558,
	"./Script_Extensions/Old_Turkic.js": 1559,
	"./Script_Extensions/Oriya.js": 1560,
	"./Script_Extensions/Osage.js": 1561,
	"./Script_Extensions/Osmanya.js": 1562,
	"./Script_Extensions/Pahawh_Hmong.js": 1563,
	"./Script_Extensions/Palmyrene.js": 1564,
	"./Script_Extensions/Pau_Cin_Hau.js": 1565,
	"./Script_Extensions/Phags_Pa.js": 1566,
	"./Script_Extensions/Phoenician.js": 1567,
	"./Script_Extensions/Psalter_Pahlavi.js": 1568,
	"./Script_Extensions/Rejang.js": 1569,
	"./Script_Extensions/Runic.js": 1570,
	"./Script_Extensions/Samaritan.js": 1571,
	"./Script_Extensions/Saurashtra.js": 1572,
	"./Script_Extensions/Sharada.js": 1573,
	"./Script_Extensions/Shavian.js": 1574,
	"./Script_Extensions/Siddham.js": 1575,
	"./Script_Extensions/SignWriting.js": 1576,
	"./Script_Extensions/Sinhala.js": 1577,
	"./Script_Extensions/Sogdian.js": 1578,
	"./Script_Extensions/Sora_Sompeng.js": 1579,
	"./Script_Extensions/Soyombo.js": 1580,
	"./Script_Extensions/Sundanese.js": 1581,
	"./Script_Extensions/Syloti_Nagri.js": 1582,
	"./Script_Extensions/Syriac.js": 1583,
	"./Script_Extensions/Tagalog.js": 1584,
	"./Script_Extensions/Tagbanwa.js": 1585,
	"./Script_Extensions/Tai_Le.js": 1586,
	"./Script_Extensions/Tai_Tham.js": 1587,
	"./Script_Extensions/Tai_Viet.js": 1588,
	"./Script_Extensions/Takri.js": 1589,
	"./Script_Extensions/Tamil.js": 1590,
	"./Script_Extensions/Tangut.js": 1591,
	"./Script_Extensions/Telugu.js": 1592,
	"./Script_Extensions/Thaana.js": 1593,
	"./Script_Extensions/Thai.js": 1594,
	"./Script_Extensions/Tibetan.js": 1595,
	"./Script_Extensions/Tifinagh.js": 1596,
	"./Script_Extensions/Tirhuta.js": 1597,
	"./Script_Extensions/Ugaritic.js": 1598,
	"./Script_Extensions/Vai.js": 1599,
	"./Script_Extensions/Wancho.js": 1600,
	"./Script_Extensions/Warang_Citi.js": 1601,
	"./Script_Extensions/Yi.js": 1602,
	"./Script_Extensions/Zanabazar_Square.js": 1603,
	"./index.js": 1604,
	"./unicode-version.js": 1605
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1208;

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ 1655:
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_actions_1 = __webpack_require__(566);
var file_1 = __webpack_require__(88);
/**
 * @file home action
 */
var Project_Init = 'Project_Init';
var File_Int = 'File_Int';
exports.default = {
    types: {
        Project_Init: Project_Init,
        File_Int: File_Int
    },
    initProject: redux_actions_1.createAction(Project_Init),
    initFile: redux_actions_1.createAction(File_Int, function (path) {
        return file_1.default.findFiles(path);
    })
};


/***/ }),

/***/ 1672:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var vscode_icons_js_1 = __webpack_require__(1673);
var util_1 = __webpack_require__(99);
__webpack_require__(1679);
/**
 * @file file type icon
 */
var FileIcon = /** @class */ (function (_super) {
    __extends(FileIcon, _super);
    function FileIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileIcon.prototype.render = function () {
        var file = this.props.file;
        var icon = file.type == 'file' ? vscode_icons_js_1.getIconForFile(file.title) : vscode_icons_js_1.getIconForFolder(file.title);
        var uri = util_1.default.getFilePath("/assets/icons/" + icon);
        return (React.createElement("span", { className: 'mf-fileicon' },
            React.createElement("img", { src: uri })));
    };
    return FileIcon;
}(React.Component));
exports.default = FileIcon;


/***/ }),

/***/ 1679:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(1680);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(47)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 1680:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// Module
exports.push([module.i, ".mf-fileicon img {\n  width: 22px;\n  height: 22px;\n  background-size: cover;\n}\n", ""]);


/***/ }),

/***/ 1681:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var fs = __webpack_require__(105);
var antd_1 = __webpack_require__(124);
var react_codemirror2_1 = __webpack_require__(1682);
var util_1 = __webpack_require__(99);
var file_1 = __webpack_require__(88);
__webpack_require__(1683);
__webpack_require__(1685);
__webpack_require__(1687);
__webpack_require__(1688);
__webpack_require__(1689);
/**
 * @file web ide
 */
var PubSub = __webpack_require__(565);
var Code = /** @class */ (function (_super) {
    __extends(Code, _super);
    function Code() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            file: null
        };
        _this.keyHandle = function (synthetic) {
            var e = synthetic.nativeEvent;
            if (e.metaKey && e.keyCode == 83) {
                _this.saveCode();
            }
        };
        /**
         * 代码更新
         */
        _this.updateHandle = function (editor, data, value) {
            // load code 不要触发事件
            if (data.origin == void 0) {
                _this.notify('code-load');
                // 长度一致不需要 save
            }
            else if (_this.len == value.length) {
                _this.notify('code-save');
            }
            else {
                _this.notify('code-edit');
            }
            _this.value = value;
        };
        return _this;
    }
    Code.getDerivedStateFromProps = function (props, state) {
        return {
            file: state.file || props.file
        };
    };
    /**
     * 通知 status bar 改变 ui 状态
     */
    Code.prototype.notify = function (msg) {
        return PubSub.publish(msg);
    };
    /**
     * 保存代码到本地
     */
    Code.prototype.saveCode = function () {
        var file = this.state.file;
        var code = this.value;
        if (!file) {
            return antd_1.message.warning('invalid project');
        }
        if (!code || this.len == code.length) {
            return this.notify('code-save');
        }
        var res = file_1.default.writeFile(file.path, code);
        if (res.code == -1) {
            return antd_1.message.error(res.msg);
        }
        else {
            // 保存成功，更新 len
            this.len = code.length;
            this.notify('code-save');
        }
    };
    /**
     * 外部传入 file
     */
    Code.prototype.acceptFile = function (file) {
        this.setState({ file: file });
    };
    Code.prototype.render = function () {
        var file = this.state.file;
        var code = '';
        var mode = '';
        if (file) {
            code = fs.readFileSync(file.path).toString();
            mode = util_1.default.getCodeType(file.extension);
        }
        this.len = code.length;
        return (React.createElement("div", { className: 'mf-code', onKeyDown: this.keyHandle }, code ? (React.createElement(react_codemirror2_1.UnControlled, { value: code, options: {
                mode: mode,
                theme: 'material',
                lineNumbers: true
            }, onChange: this.updateHandle })) : null));
    };
    return Code;
}(React.PureComponent));
exports.default = Code;


/***/ }),

/***/ 1689:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(1690);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(47)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 1690:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// Module
exports.push([module.i, ".mf-code {\n  position: relative;\n  text-align: left;\n}\n.mf-code .CodeMirror {\n  height: auto;\n}\n", ""]);


/***/ }),

/***/ 1691:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var util_1 = __webpack_require__(99);
__webpack_require__(1692);
/**
 * @file 状态栏
 */
var PubSub = __webpack_require__(565);
var Status = /** @class */ (function (_super) {
    __extends(Status, _super);
    function Status() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            codeStatus: 'normal',
            file: null
        };
        return _this;
    }
    Status.getDerivedStateFromProps = function (props, state) {
        return {
            file: state.file || props.file
        };
    };
    Status.prototype.componentDidMount = function () {
        var _this = this;
        // out of react transaction
        PubSub.subscribe('code-edit', function () {
            if (_this.state.codeStatus == 'normal') {
                _this.setState({ codeStatus: 'edit' });
                console.log(2);
            }
        });
        PubSub.subscribe('code-save', function () { return _this.setState({ codeStatus: 'normal' }); });
        PubSub.subscribe('code-load', function () { return _this.setState({ codeStatus: 'normal' }); });
    };
    Status.prototype.componentWillUnmount = function () {
        PubSub.clearAllSubscriptions();
    };
    Status.prototype.acceptFile = function (file) {
        this.setState({ file: file });
    };
    Status.prototype.render = function () {
        var project = this.props.project;
        var _a = this.state, codeStatus = _a.codeStatus, file = _a.file;
        var type = '--';
        var path = '--';
        if (file) {
            path = file.path;
            type = util_1.default.getFileType(path);
        }
        return (React.createElement("div", { className: 'mf-status' },
            React.createElement("div", { className: 'mf-status-file' },
                React.createElement("img", { src: util_1.default.getFilePath('/assets/img/status-logo.svg') }),
                React.createElement("em", null, project ? project.name : '--'),
                React.createElement("span", null, path),
                codeStatus == 'edit' ? React.createElement("span", { className: 'mf-status-todo' }) : null),
            React.createElement("div", { className: 'mf-status-type' },
                React.createElement("em", null, "UTF-8"),
                React.createElement("span", null, type))));
    };
    return Status;
}(React.PureComponent));
exports.default = Status;


/***/ }),

/***/ 1692:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(1693);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(47)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 1693:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// Module
exports.push([module.i, ".mf-status {\n  position: relative;\n  height: 40px;\n  line-height: 40px;\n  color: #909090;\n}\n.mf-status .mf-status-file {\n  position: absolute;\n  left: 15px;\n}\n.mf-status .mf-status-file img {\n  width: 20px;\n  height: 20px;\n  margin-right: 5px;\n}\n.mf-status .mf-status-file em {\n  margin-right: 20px;\n  font-weight: 700;\n}\n.mf-status .mf-status-type {\n  position: absolute;\n  right: 15px;\n}\n.mf-status .mf-status-type em {\n  margin-right: 20px;\n}\n.mf-status .mf-status-todo {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 5px;\n  margin-left: 10px;\n  vertical-align: -1px;\n  background: #9d9d9d;\n}\n", ""]);


/***/ }),

/***/ 1694:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_dom_1 = __webpack_require__(10);
var antd_1 = __webpack_require__(124);
var react_redux_1 = __webpack_require__(163);
var redux_1 = __webpack_require__(125);
var react_contextmenu_1 = __webpack_require__(1704);
var action_1 = __webpack_require__(167);
var file_1 = __webpack_require__(88);
__webpack_require__(1695);
/**
 * @file context menu
 */
var MfMenu = /** @class */ (function (_super) {
    __extends(MfMenu, _super);
    function MfMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            path: null,
            visible: false,
            pos: null,
            action: null
        };
        _this.clickHandle = function (elem, data) {
            console.log(data);
        };
        /**
         * 添加文件
         */
        _this.addHandle = function (elem, data) {
            _this.setState({ visible: true, action: data.type });
        };
        _this.showModal = function () {
            _this.setState({ visible: true });
        };
        _this.hideModal = function () {
            _this.setState({ visible: false, action: null });
        };
        /**
         * 处理 add 指令
         */
        _this.doAddHandle = function () {
            var _a = _this.state, path = _a.path, action = _a.action;
            var node = react_dom_1.findDOMNode(_this.refs.finput);
            var name = node.value.replace(/\s/g, '');
            if (!name) {
                return _this.hideModal();
            }
            var flag = action == 'add1' ? 1 : 2;
            // 如果点击的是文件，修复 path
            if (/[^.]+\.[a-zA-Z]+/.test(path)) {
                path = path.replace(/[^./]+\..+/, '');
            }
            path = path.replace('/$', '');
            var res = file_1.default.mknew(path + "/" + name, flag);
            if (res.code == -1) {
                antd_1.Modal.error({ title: res.msg });
            }
            else {
                _this.refreshExplore();
                _this.hideModal();
            }
        };
        /**
         * 删除文件 & 目录
         */
        _this.delHandle = function () {
            var path = _this.state.path;
            var res = file_1.default.rm(path);
            if (res.code == -1) {
                antd_1.Modal.error({ title: res.msg });
            }
            else {
                _this.refreshExplore();
            }
        };
        /**
         * 前插右键事件
         */
        _this.onContextMenu = function (e) {
            var state = _this.state;
            var elem = e.target;
            var path = elem.getAttribute('data-path');
            state.path = path;
            state.pos = { left: e.clientX, top: e.clientY };
            if (!path) {
                e.stopPropagation();
            }
        };
        return _this;
    }
    MfMenu.prototype.refreshExplore = function () {
        var _a = this.props, initFileAction = _a.initFileAction, project = _a.project;
        initFileAction(project.path);
    };
    MfMenu.prototype.render = function () {
        var children = this.props.children;
        var _a = this.state, pos = _a.pos, visible = _a.visible;
        var parent = React.cloneElement(children, {
            onContextMenu: this.onContextMenu
        });
        return (React.createElement("div", { className: 'mf-contextmenu' },
            React.createElement(react_contextmenu_1.ContextMenuTrigger, { id: 'mf-contextmenu-id' }, parent),
            React.createElement(react_contextmenu_1.ContextMenu, { id: 'mf-contextmenu-id' },
                React.createElement(react_contextmenu_1.MenuItem, { data: { type: 'finder' }, onClick: this.clickHandle, disabled: true }, "\u5728 Finder \u4E2D\u663E\u793A"),
                React.createElement(react_contextmenu_1.MenuItem, { data: { type: 'code' }, onClick: this.clickHandle }, "\u5728\u7F16\u8F91\u5668\u4E2D\u6253\u5F00"),
                React.createElement(react_contextmenu_1.MenuItem, { data: { type: 'iterm' }, onClick: this.clickHandle, disabled: true }, "\u5728\u7EC8\u7AEF\u4E2D\u6253\u5F00"),
                React.createElement(react_contextmenu_1.MenuItem, { divider: true }),
                React.createElement(react_contextmenu_1.MenuItem, { data: { type: 'add1' }, onClick: this.addHandle }, "\u65B0\u5EFA\u6587\u4EF6"),
                React.createElement(react_contextmenu_1.MenuItem, { data: { type: 'add2' }, onClick: this.addHandle }, "\u65B0\u5EFA\u76EE\u5F55"),
                React.createElement(react_contextmenu_1.MenuItem, { data: { type: 'rename' }, onClick: this.clickHandle, disabled: true }, "\u91CD\u547D\u540D"),
                React.createElement(react_contextmenu_1.MenuItem, { divider: true }),
                React.createElement(react_contextmenu_1.MenuItem, { data: { type: 'del' }, onClick: this.delHandle }, "\u5220\u9664")),
            React.createElement(antd_1.Modal, { className: 'mf-filemodal', style: pos, closable: false, visible: visible, onOk: this.doAddHandle, onCancel: this.hideModal, mask: false },
                React.createElement(antd_1.Input, { ref: 'finput', autoFocus: true }))));
    };
    return MfMenu;
}(React.Component));
var mapStateToProps = function (state) {
    return {
        project: state.project
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        initFileAction: redux_1.bindActionCreators(action_1.default.initFile, dispatch)
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(MfMenu);


/***/ }),

/***/ 1695:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(1696);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(47)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 1696:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// Module
exports.push([module.i, "/** context-menu style */\n.mf-contextmenu .react-contextmenu {\n  min-width: 160px;\n  padding: 5px 0;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n  margin: 2px 0 0;\n  font-size: 12px;\n  text-align: left;\n  background-color: #d0d0d0;\n  background-clip: padding-box;\n  color: #373a3c;\n  outline: none;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 250ms ease !important;\n}\n.mf-contextmenu .react-contextmenu.react-contextmenu--visible {\n  opacity: 1;\n  pointer-events: auto;\n  z-index: 9999;\n}\n.mf-contextmenu .react-contextmenu-item {\n  padding: 3px 20px;\n  border: 0;\n  line-height: 1.5;\n  font-weight: 400;\n  text-align: inherit;\n  background: 0 0;\n  color: #373a3c;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.mf-contextmenu .react-contextmenu-item.react-contextmenu-item--active,\n.mf-contextmenu .react-contextmenu-item.react-contextmenu-item--selected {\n  color: #fff;\n  background-color: #0a8ff5;\n  border-color: #0a8ff5;\n  text-decoration: none;\n}\n.mf-contextmenu .react-contextmenu-item.react-contextmenu-item--disabled,\n.mf-contextmenu .react-contextmenu-item.react-contextmenu-item--disabled:hover {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.15);\n  color: #878a8c;\n}\n.mf-contextmenu .react-contextmenu-item--divider {\n  padding: 2px 0;\n  margin-bottom: 3px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.15);\n  cursor: inherit;\n}\n.mf-contextmenu .react-contextmenu-item--divider:hover {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.15);\n}\n.mf-contextmenu .react-contextmenu-item.react-contextmenu-submenu {\n  padding: 0;\n}\n.mf-contextmenu .react-contextmenu-item.react-contextmenu-submenu > .react-contextmenu-item:after {\n  content: '▶';\n  display: inline-block;\n  position: absolute;\n  right: 7px;\n}\n.mf-contextmenu .example-multiple-targets::after {\n  content: attr(data-count);\n  display: block;\n}\n.mf-filemodal {\n  width: 200px !important;\n  margin: 0 !important;\n}\n.mf-filemodal .ant-modal-body {\n  padding: 10px;\n}\n.mf-filemodal .ant-modal-footer {\n  padding: 10px;\n}\n.mf-filemodal .ant-btn {\n  font-size: 12px;\n  line-height: 28px;\n  height: 28px;\n}\n", ""]);


/***/ }),

/***/ 1697:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(1698);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(47)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 1698:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// Module
exports.push([module.i, "/** home console */\n.mf-home {\n  height: 100vh;\n}\n.mf-home .ant-layout-footer {\n  height: 60px;\n}\n.mf-home .ant-layout-sider {\n  padding-top: 5px;\n  background: #272727;\n  -webkit-user-select: none;\n}\n.mf-home .ant-layout-sider .ant-tree li .ant-tree-node-content-wrapper {\n  padding: 0 8px 0 5px;\n  color: #fff;\n}\n.mf-home .ant-layout-sider .ant-tree li .ant-tree-node-content-wrapper.ant-tree-node-selected {\n  background: #444;\n  color: #e2c08d;\n}\n.mf-home .ant-layout-sider .ant-tree li .ant-tree-node-content-wrapper:hover {\n  background: #444;\n}\n.mf-home .ant-layout-sider .ant-tree li span.ant-tree-iconEle {\n  margin-right: 5px;\n}\n.mf-home .ant-layout-content {\n  padding-top: 10px;\n  background: #263238;\n  color: #fff;\n}\n.mf-home .mf-info {\n  padding: 10px 0;\n  font-weight: 600;\n  font-size: 16px;\n  text-align: center;\n}\n.mf-home .mf-info button {\n  margin-left: 10px;\n  font-size: 12px;\n}\n.mf-home .mf-filelist {\n  position: relative;\n  min-height: 400px;\n  text-align: left;\n}\n.mf-home .mf-filelist .anticon-caret-down {\n  color: #fff;\n}\n.mf-home .mf-footer {\n  padding: 0;\n  height: 40px;\n  background: #202020;\n}\n", ""]);


/***/ }),

/***/ 1699:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
__webpack_require__(1700);
/**
 * @file 错误边界
 */
var ErrorBoundary = /** @class */ (function (_super) {
    __extends(ErrorBoundary, _super);
    function ErrorBoundary() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false, e: null };
        return _this;
    }
    ErrorBoundary.getDerivedStateFromError = function (e) {
        return { hasError: true, e: e };
    };
    ErrorBoundary.prototype.render = function () {
        var children = this.props.children;
        var _a = this.state, hasError = _a.hasError, e = _a.e;
        return hasError ? (React.createElement("div", { className: 'mf-error' },
            React.createElement("h1", null, "app exception"),
            React.createElement("p", null, e.message))) : (children);
    };
    return ErrorBoundary;
}(React.Component));
exports.default = ErrorBoundary;


/***/ }),

/***/ 1700:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(1701);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(47)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 1701:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// Module
exports.push([module.i, ".mf-error {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: 100vh;\n}\n.mf-error p {\n  font-size: 18px;\n  color: #f41e1e;\n}\n", ""]);


/***/ }),

/***/ 49:
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(10);
var router_1 = __webpack_require__(595);
/**
 * @file 控制台 app
 */
function render(App) {
    ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
}
render(router_1.default);
if (false) {}


/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_redux_1 = __webpack_require__(163);
var react_router_1 = __webpack_require__(1706);
var store_1 = __webpack_require__(601);
var ide_1 = __webpack_require__(608);
var boundary_1 = __webpack_require__(1699);
__webpack_require__(1702);
/**
 * @file memory router from electron
 */
function default_1() {
    return (React.createElement(boundary_1.default, null,
        React.createElement(react_redux_1.Provider, { store: store_1.default },
            React.createElement(react_router_1.MemoryRouter, null,
                React.createElement(react_router_1.Route, { exact: true, path: '/', component: ide_1.default })))));
}
exports.default = default_1;


/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(125);
var reducer_1 = __webpack_require__(602);
/**
 * @file home store
 */
var initState = {
    project: undefined,
    file: undefined
};
var reducers = redux_1.combineReducers({
    project: reducer_1.projectReducer,
    file: reducer_1.fileReducer
});
exports.default = redux_1.createStore(reducers, initState);


/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var redux_actions_1 = __webpack_require__(566);
var action_1 = __webpack_require__(167);
var file_1 = __webpack_require__(88);
/**
 * @file home reducer
 */
var types = action_1.default.types;
var pstate = file_1.default.readConfig();
var fstate = file_1.default.findFiles(pstate && pstate.path);
/**
 * 项目信息 reducer
 */
exports.projectReducer = redux_actions_1.handleActions((_a = {},
    _a[types.Project_Init] = function (state, action) {
        return action.payload || state;
    },
    _a), pstate);
/**
 * 文件处理 reducer
 */
exports.fileReducer = redux_actions_1.handleActions((_b = {},
    _b[types.File_Int] = function (state, action) {
        return action.payload || null;
    },
    _b), fstate);


/***/ }),

/***/ 605:
/***/ (function(module, exports) {

module.exports = require("directory-tree");

/***/ }),

/***/ 606:
/***/ (function(module, exports) {

module.exports = require("write");

/***/ }),

/***/ 607:
/***/ (function(module, exports) {

module.exports = require("rimraf");

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var antd_1 = __webpack_require__(124);
var react_redux_1 = __webpack_require__(163);
var operate_1 = __webpack_require__(892);
var fileIcon_1 = __webpack_require__(1672);
var code_1 = __webpack_require__(1681);
var status_1 = __webpack_require__(1691);
var menu_1 = __webpack_require__(1694);
var util_1 = __webpack_require__(99);
var file_1 = __webpack_require__(88);
__webpack_require__(1697);
/**
 * @file 控制台主窗口
 */
var Footer = antd_1.Layout.Footer, Sider = antd_1.Layout.Sider, Content = antd_1.Layout.Content;
var mapStateToProps = function (state) {
    return {
        project: state.project,
        file: state.file
    };
};
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            select: null,
            file: null,
            expandKeys: ['root']
        };
        /**
         * 选择文件更新 ide
         */
        _this.changeFileHandle = function (keys) {
            var _a = _this.props, project = _a.project, file = _a.file;
            var select = file.map[keys[0]];
            var code = _this.refs.code;
            var status = _this.refs.status;
            if (select && select.type == 'file') {
                // 将选中文件写入配置
                file_1.default.writeConfig(__assign(__assign({}, project), { entry: select.path }));
                code.acceptFile(select);
                status.acceptFile(select);
            }
        };
        /**
         * 记录展开的 keys
         */
        _this.setExpandHandle = function (keys) {
            _this.state.expandKeys = keys;
        };
        var win = util_1.default.getLocalWin();
        win && win.setSize(1600, 1000);
        return _this;
    }
    Home.getDerivedStateFromProps = function (props, state) {
        // props 引发更新，这里的 state 是 prevState
        var last = state.file;
        var next = props.file;
        return {
            file: props.file,
            select: last != next ? next.entry : state.select,
            expandKeys: state.expandKeys
        };
    };
    /**
     * 渲染资源管理树
     */
    Home.prototype.generateTree = function (list) {
        var _this = this;
        var TreeNode = antd_1.Tree.TreeNode;
        return list.map(function (item) {
            var customTitle = React.createElement("span", { "data-path": item.path }, item.title);
            if (item.children) {
                return (React.createElement(TreeNode, { icon: React.createElement(fileIcon_1.default, { file: item }), title: customTitle, key: item.key, selectable: false }, _this.generateTree(item.children)));
            }
            return React.createElement(TreeNode, { icon: React.createElement(fileIcon_1.default, { file: item }), key: item.key, title: customTitle });
        });
    };
    Home.prototype.render = function () {
        var _a = this.props, project = _a.project, file = _a.file;
        var _b = this.state, select = _b.select, expandKeys = _b.expandKeys;
        var fileList = file.list;
        var keys = expandKeys;
        return (React.createElement(antd_1.Layout, { className: 'mf-home' },
            React.createElement(antd_1.Layout, null,
                React.createElement(Sider, { width: '300' },
                    React.createElement("div", { className: 'mf-info' },
                        React.createElement(operate_1.default, { project: project, showLaunch: !fileList })),
                    React.createElement(menu_1.default, null,
                        React.createElement("div", { className: 'mf-filelist' }, fileList ? (React.createElement(antd_1.Tree, { key: Date.now(), defaultExpandedKeys: keys, defaultSelectedKeys: [select && select.key], showIcon: true, onSelect: this.changeFileHandle, onExpand: this.setExpandHandle }, this.generateTree(fileList))) : null))),
                React.createElement(Content, null,
                    React.createElement(code_1.default, { ref: 'code', file: select }))),
            React.createElement(Footer, { className: 'mf-footer' },
                React.createElement(status_1.default, { ref: "status", project: project, file: select }))));
    };
    return Home;
}(React.Component));
exports.default = react_redux_1.connect(mapStateToProps)(Home);


/***/ }),

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 266,
	"./af.js": 266,
	"./ar": 267,
	"./ar-dz": 268,
	"./ar-dz.js": 268,
	"./ar-kw": 269,
	"./ar-kw.js": 269,
	"./ar-ly": 270,
	"./ar-ly.js": 270,
	"./ar-ma": 271,
	"./ar-ma.js": 271,
	"./ar-sa": 272,
	"./ar-sa.js": 272,
	"./ar-tn": 273,
	"./ar-tn.js": 273,
	"./ar.js": 267,
	"./az": 274,
	"./az.js": 274,
	"./be": 275,
	"./be.js": 275,
	"./bg": 276,
	"./bg.js": 276,
	"./bm": 277,
	"./bm.js": 277,
	"./bn": 278,
	"./bn.js": 278,
	"./bo": 279,
	"./bo.js": 279,
	"./br": 280,
	"./br.js": 280,
	"./bs": 281,
	"./bs.js": 281,
	"./ca": 282,
	"./ca.js": 282,
	"./cs": 283,
	"./cs.js": 283,
	"./cv": 284,
	"./cv.js": 284,
	"./cy": 285,
	"./cy.js": 285,
	"./da": 286,
	"./da.js": 286,
	"./de": 287,
	"./de-at": 288,
	"./de-at.js": 288,
	"./de-ch": 289,
	"./de-ch.js": 289,
	"./de.js": 287,
	"./dv": 290,
	"./dv.js": 290,
	"./el": 291,
	"./el.js": 291,
	"./en-SG": 292,
	"./en-SG.js": 292,
	"./en-au": 293,
	"./en-au.js": 293,
	"./en-ca": 294,
	"./en-ca.js": 294,
	"./en-gb": 295,
	"./en-gb.js": 295,
	"./en-ie": 296,
	"./en-ie.js": 296,
	"./en-il": 297,
	"./en-il.js": 297,
	"./en-nz": 298,
	"./en-nz.js": 298,
	"./eo": 299,
	"./eo.js": 299,
	"./es": 300,
	"./es-do": 301,
	"./es-do.js": 301,
	"./es-us": 302,
	"./es-us.js": 302,
	"./es.js": 300,
	"./et": 303,
	"./et.js": 303,
	"./eu": 304,
	"./eu.js": 304,
	"./fa": 305,
	"./fa.js": 305,
	"./fi": 306,
	"./fi.js": 306,
	"./fo": 307,
	"./fo.js": 307,
	"./fr": 308,
	"./fr-ca": 309,
	"./fr-ca.js": 309,
	"./fr-ch": 310,
	"./fr-ch.js": 310,
	"./fr.js": 308,
	"./fy": 311,
	"./fy.js": 311,
	"./ga": 312,
	"./ga.js": 312,
	"./gd": 313,
	"./gd.js": 313,
	"./gl": 314,
	"./gl.js": 314,
	"./gom-latn": 315,
	"./gom-latn.js": 315,
	"./gu": 316,
	"./gu.js": 316,
	"./he": 317,
	"./he.js": 317,
	"./hi": 318,
	"./hi.js": 318,
	"./hr": 319,
	"./hr.js": 319,
	"./hu": 320,
	"./hu.js": 320,
	"./hy-am": 321,
	"./hy-am.js": 321,
	"./id": 322,
	"./id.js": 322,
	"./is": 323,
	"./is.js": 323,
	"./it": 324,
	"./it-ch": 325,
	"./it-ch.js": 325,
	"./it.js": 324,
	"./ja": 326,
	"./ja.js": 326,
	"./jv": 327,
	"./jv.js": 327,
	"./ka": 328,
	"./ka.js": 328,
	"./kk": 329,
	"./kk.js": 329,
	"./km": 330,
	"./km.js": 330,
	"./kn": 331,
	"./kn.js": 331,
	"./ko": 332,
	"./ko.js": 332,
	"./ku": 333,
	"./ku.js": 333,
	"./ky": 334,
	"./ky.js": 334,
	"./lb": 335,
	"./lb.js": 335,
	"./lo": 336,
	"./lo.js": 336,
	"./lt": 337,
	"./lt.js": 337,
	"./lv": 338,
	"./lv.js": 338,
	"./me": 339,
	"./me.js": 339,
	"./mi": 340,
	"./mi.js": 340,
	"./mk": 341,
	"./mk.js": 341,
	"./ml": 342,
	"./ml.js": 342,
	"./mn": 343,
	"./mn.js": 343,
	"./mr": 344,
	"./mr.js": 344,
	"./ms": 345,
	"./ms-my": 346,
	"./ms-my.js": 346,
	"./ms.js": 345,
	"./mt": 347,
	"./mt.js": 347,
	"./my": 348,
	"./my.js": 348,
	"./nb": 349,
	"./nb.js": 349,
	"./ne": 350,
	"./ne.js": 350,
	"./nl": 351,
	"./nl-be": 352,
	"./nl-be.js": 352,
	"./nl.js": 351,
	"./nn": 353,
	"./nn.js": 353,
	"./pa-in": 354,
	"./pa-in.js": 354,
	"./pl": 355,
	"./pl.js": 355,
	"./pt": 356,
	"./pt-br": 357,
	"./pt-br.js": 357,
	"./pt.js": 356,
	"./ro": 358,
	"./ro.js": 358,
	"./ru": 359,
	"./ru.js": 359,
	"./sd": 360,
	"./sd.js": 360,
	"./se": 361,
	"./se.js": 361,
	"./si": 362,
	"./si.js": 362,
	"./sk": 363,
	"./sk.js": 363,
	"./sl": 364,
	"./sl.js": 364,
	"./sq": 365,
	"./sq.js": 365,
	"./sr": 366,
	"./sr-cyrl": 367,
	"./sr-cyrl.js": 367,
	"./sr.js": 366,
	"./ss": 368,
	"./ss.js": 368,
	"./sv": 369,
	"./sv.js": 369,
	"./sw": 370,
	"./sw.js": 370,
	"./ta": 371,
	"./ta.js": 371,
	"./te": 372,
	"./te.js": 372,
	"./tet": 373,
	"./tet.js": 373,
	"./tg": 374,
	"./tg.js": 374,
	"./th": 375,
	"./th.js": 375,
	"./tl-ph": 376,
	"./tl-ph.js": 376,
	"./tlh": 377,
	"./tlh.js": 377,
	"./tr": 378,
	"./tr.js": 378,
	"./tzl": 379,
	"./tzl.js": 379,
	"./tzm": 380,
	"./tzm-latn": 381,
	"./tzm-latn.js": 381,
	"./tzm.js": 380,
	"./ug-cn": 382,
	"./ug-cn.js": 382,
	"./uk": 383,
	"./uk.js": 383,
	"./ur": 384,
	"./ur.js": 384,
	"./uz": 385,
	"./uz-latn": 386,
	"./uz-latn.js": 386,
	"./uz.js": 385,
	"./vi": 387,
	"./vi.js": 387,
	"./x-pseudo": 388,
	"./x-pseudo.js": 388,
	"./yo": 389,
	"./yo.js": 389,
	"./zh-cn": 390,
	"./zh-cn.js": 390,
	"./zh-hk": 391,
	"./zh-hk.js": 391,
	"./zh-tw": 392,
	"./zh-tw.js": 392
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 662;

/***/ }),

/***/ 71:
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// import fg = require('fast-glob');
var dirTree = __webpack_require__(605);
var fs = __webpack_require__(105);
var write = __webpack_require__(606);
var rimraf = __webpack_require__(607);
var remote = __webpack_require__(126).remote;
/**
 * @file 文件工具
 */
exports.default = {
    /**
     * 读文件
     */
    readFile: function (path) {
        return fs.readFileSync(path).toString();
    },
    /**
     * 写文件
     */
    writeFile: function (path, code) {
        try {
            return write.sync(path, code, { newline: true, overwrite: true });
        }
        catch (e) {
            return { code: -1, msg: e.message };
        }
    },
    /**
     * 读取文件树
     * @param {string} path 项目路径
     */
    findFiles: function (path) {
        try {
            fs.accessSync(path);
        }
        catch (e) {
            return {};
        }
        var id = 1;
        var entry = null;
        var srcPath = path + "/src";
        // 直接读取本地文件，减少参数复杂度
        var project = this.readConfig();
        try {
            fs.accessSync(srcPath);
        }
        catch (e) {
            fs.mkdirSync(srcPath);
        }
        var map = {};
        var formatNode = function (item) {
            var name = item.name;
            var key = String(id++);
            if (name == 'src') {
                key = 'root';
            }
            else if (item.path == (project && project.entry)) {
                entry = item;
                key = 'default';
            }
            item.title = name;
            item.key = key;
            map[key] = item;
        };
        var tree = dirTree(path + '/src', null, formatNode, formatNode);
        return { list: tree && [tree], map: map, entry: entry };
    },
    /**
     * 读取 project config
     */
    readConfig: function () {
        try {
            var config = fs.readFileSync(remote.getGlobal('info').appPath + "/config/project.json");
            return JSON.parse(config.toString());
        }
        catch (e) {
            return null;
        }
    },
    /**
     * 重写 project config
     */
    writeConfig: function (data) {
        if (typeof data == 'object') {
            data = JSON.stringify(data);
        }
        try {
            var filePath = remote.getGlobal('info').appPath + "/config/project.json";
            return write.sync(filePath, data, { newline: true, overwrite: true });
        }
        catch (e) {
            return { code: -1, msg: e.message };
        }
    },
    exist: function (path) {
        try {
            fs.accessSync(path);
            return true;
        }
        catch (error) {
            return false;
        }
    },
    /**
     * 新建
     * @param path
     * @param type 类别 1 文件 2目录
     */
    mknew: function (path, type) {
        if (type === void 0) { type = 1; }
        try {
            type == 1 ? write.sync(path) : fs.mkdirSync(path);
            return { code: 0 };
        }
        catch (e) {
            return { code: -1, msg: e.message };
        }
    },
    /**
     * 删除
     */
    rm: function (path) {
        try {
            rimraf.sync(path);
            return { code: 0 };
        }
        catch (e) {
            return { code: -1, msg: e.message };
        }
    },
    /**
     * 选择系统路径
     */
    selectPath: function () {
        var dialog = __webpack_require__(126).remote.dialog;
        return dialog.showOpenDialog({ properties: ['openDirectory'], buttonLabel: '选择' });
    }
};


/***/ }),

/***/ 892:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var antd_1 = __webpack_require__(124);
var console_feed_1 = __webpack_require__(893);
var axios_1 = __webpack_require__(954);
var launch_1 = __webpack_require__(971);
var util_1 = __webpack_require__(99);
__webpack_require__(975);
/**
 * @file 项目选择组件
 */
var fg = __webpack_require__(977);
var fs = __webpack_require__(105);
var webpack = __webpack_require__(978);
var mfconsole;
var Operate = /** @class */ (function (_super) {
    __extends(Operate, _super);
    function Operate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            vlaunch: false,
            vdeploy: false,
            vbuild: false,
            logs: []
        };
        _this.showLaunch = function () {
            _this.setState({ vlaunch: true });
        };
        _this.hideLaunch = function () {
            _this.setState({ vlaunch: false });
        };
        /**
         * 打开部署窗口
         */
        _this.deployHandle = function () {
            _this.setState({ vdeploy: true }, function () { return _this.deploy(); });
        };
        _this.closeDeployHandle = function () {
            _this.setState({ vdeploy: false });
        };
        /**
         * 打开编译窗口
         */
        _this.buildHandle = function () {
            _this.setState({ vbuild: true }, function () { return _this.build(); });
        };
        _this.closeBuildHandle = function () {
            _this.setState({ vbuild: false });
        };
        /**
         * 部署到远程服务器
         */
        _this.deploy = function () {
            var project = _this.props.project;
            _this.state.logs = [];
            axios_1.default
                .post(project.deploy, { test: 1 })
                .then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                var list, hasPkg, i, file, data, ret, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            mfconsole.warn('start to deploy ...');
                            return [4 /*yield*/, this.lazy(1000)];
                        case 1:
                            _a.sent();
                            mfconsole.log('deploy server connected ...');
                            list = fg.sync(project.path + "/src/**.(js|jsx|less|css|ts|tsx)");
                            hasPkg = false;
                            if (!list.length) {
                                return [2 /*return*/, mfconsole.error('empty project')];
                            }
                            i = 0;
                            _a.label = 2;
                        case 2:
                            if (!(i < list.length)) return [3 /*break*/, 7];
                            file = list[i];
                            if (/pkg\.js/.test(file)) {
                                hasPkg = true;
                            }
                            _a.label = 3;
                        case 3:
                            _a.trys.push([3, 5, , 6]);
                            data = new FormData();
                            data.append('name', project.name);
                            data.append('filePath', file);
                            data.append('file', new Blob(fs.readFileSync(file)));
                            return [4 /*yield*/, axios_1.default.post(project.deploy, data, {
                                    headers: {
                                        'Content-Type': 'multipart/form-data'
                                    }
                                })];
                        case 4:
                            ret = _a.sent();
                            mfconsole.info('deploy:', file + " -> " + ret.data.to);
                            return [3 /*break*/, 6];
                        case 5:
                            e_1 = _a.sent();
                            mfconsole.error(e_1.message);
                            return [3 /*break*/, 7];
                        case 6:
                            i++;
                            return [3 /*break*/, 2];
                        case 7:
                            if (!hasPkg) {
                                mfconsole.warn('缺少 pkg 入口文件, 插件将无法启动');
                            }
                            else {
                                this.closeDeployHandle();
                            }
                            return [2 /*return*/];
                    }
                });
            }); })
                .catch(function (e) {
                mfconsole.error(e.message);
            });
        };
        return _this;
    }
    Operate.getDerivedStateFromProps = function (props, state) {
        return {
            vlaunch: props.showLaunch || state.vlaunch,
            vdeploy: state.vdeploy,
            vbuild: state.vbuild,
            logs: state.logs
        };
    };
    Operate.prototype.componentDidMount = function () {
        var _this = this;
        mfconsole = console_feed_1.Hook(Object.assign({}, window.console), function (log) { return _this.setState({ logs: __spread(_this.state.logs, [log]) }); }, false);
    };
    /**
     * 模拟 sleep
     */
    Operate.prototype.lazy = function (time) {
        return new Promise(function (resolve, reject) {
            var tid = setTimeout(function () {
                reject();
            }, time + 1000);
            setTimeout(function () {
                clearTimeout(tid);
                resolve();
            }, time);
        });
    };
    /**
     * 本地编译
     * TODO: git push 打包后文件，并推送到线上，同时更新配置服务器内容
     */
    Operate.prototype.build = function () {
        return __awaiter(this, void 0, void 0, function () {
            var appPath, project, data, opts, compiler;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        appPath = util_1.default.getAppPath();
                        project = this.props.project;
                        data = {
                            name: project.name,
                            entry: project.path + "/src/pkg.js",
                            output: appPath + "/assets/pkg",
                            appPath: appPath
                        };
                        // clean mfconsole
                        this.state.logs = [];
                        mfconsole.warn('start to build ...');
                        return [4 /*yield*/, this.lazy(100)];
                    case 1:
                        _a.sent();
                        opts = __webpack_require__(979)(data, webpack);
                        compiler = webpack(opts);
                        compiler.run(function (err, stats) {
                            if (err) {
                                mfconsole.error(err);
                            }
                            else if (stats.hasErrors()) {
                                var data_1 = stats.toJson('minimal');
                                mfconsole.error(data_1.errors[0]);
                            }
                            else {
                                mfconsole.info(stats.toString());
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Operate.prototype.render = function () {
        var _a = this.props, project = _a.project, showLabel = _a.showLabel;
        var _b = this.state, vlaunch = _b.vlaunch, vdeploy = _b.vdeploy, vbuild = _b.vbuild, logs = _b.logs;
        return (React.createElement("div", { className: 'mf-select' },
            showLabel ? (React.createElement("label", null,
                "\u9879\u76EE\u8DEF\u5F84: ",
                React.createElement("em", null, project.path))) : null,
            React.createElement(antd_1.Button, { type: 'primary', size: 'small', icon: 'file', onClick: this.showLaunch }, "\u5207\u6362"),
            React.createElement(antd_1.Button, { type: 'primary', size: 'small', icon: 'play-circle', onClick: this.deployHandle }, "\u90E8\u7F72"),
            React.createElement(antd_1.Button, { type: 'primary', size: 'small', icon: 'play-circle', onClick: this.buildHandle }, "\u6784\u5EFA"),
            React.createElement(antd_1.Modal, { className: 'mf-launch-modal', closable: false, visible: vlaunch, footer: null },
                React.createElement(launch_1.default, { onHide: this.hideLaunch })),
            React.createElement(antd_1.Modal, { className: 'mf-build-modal', visible: vdeploy, maskClosable: false, footer: null, title: project.deploy, onCancel: this.closeDeployHandle },
                React.createElement("div", null,
                    React.createElement(console_feed_1.Console, { logs: logs, variant: 'dark' }))),
            React.createElement(antd_1.Modal, { className: 'mf-build-modal', visible: vbuild, maskClosable: false, footer: null, title: util_1.default.getAppPath() + '/assets/pkg', width: 800, onCancel: this.closeBuildHandle },
                React.createElement("div", null,
                    React.createElement(console_feed_1.Console, { logs: logs, variant: 'dark' })))));
    };
    return Operate;
}(React.Component));
exports.default = Operate;


/***/ }),

/***/ 971:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_redux_1 = __webpack_require__(163);
var redux_1 = __webpack_require__(125);
var antd_1 = __webpack_require__(124);
var action_1 = __webpack_require__(167);
var file_1 = __webpack_require__(88);
var util_1 = __webpack_require__(99);
__webpack_require__(973);
var itemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 }
    }
};
var Launch = /** @class */ (function (_super) {
    __extends(Launch, _super);
    function Launch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hideLaunch = function () {
            _this.props.onHide();
        };
        /**
         * 表单提交
         */
        _this.submitHandle = function (e) {
            e.preventDefault();
            var form = _this.props.form;
            form.validateFields(function (err, project) {
                if (err) {
                    return;
                }
                if (!file_1.default.exist(project.path)) {
                    return antd_1.Modal.error({ title: '不是有效的项目路径' });
                }
                _this.save(project);
            });
        };
        /**
         * 选择项目路径
         */
        _this.selectHandle = function (e) {
            e.preventDefault();
            var form = _this.props.form;
            file_1.default.selectPath().then(function (res) {
                if (res.filePaths.length) {
                    form.setFieldsValue({ path: res.filePaths[0] });
                }
            });
            e.target.blur();
        };
        return _this;
    }
    /**
     * 设置 document title
     */
    Launch.prototype.setTitle = function (path) {
        document.title = path;
    };
    /**
     * 根据 project 信息初始化文件系统
     */
    Launch.prototype.save = function (data) {
        var _a = this.props, initProjectAction = _a.initProjectAction, initFileAction = _a.initFileAction;
        var res = file_1.default.writeConfig(data);
        var path = data.path;
        if (res.code != -1) {
            initProjectAction(data);
            initFileAction(path);
            this.setTitle(path);
            this.hideLaunch();
        }
        else {
            antd_1.Modal.error({
                title: '写入 local 数据失败',
                content: res.msg
            });
        }
    };
    Launch.prototype.render = function () {
        var _a = this.props, getFieldDecorator = _a.form.getFieldDecorator, project = _a.project;
        project && this.setTitle(project.path);
        return (React.createElement(antd_1.Layout, { className: 'mf-launch' },
            React.createElement(antd_1.Layout, { className: 'mf-launch-layout' },
                React.createElement("h2", null,
                    React.createElement("img", { src: util_1.default.getFilePath('/assets/img/dock.png') }),
                    "Init Your Project"),
                React.createElement(antd_1.Form, __assign({}, itemLayout, { onSubmit: this.submitHandle, className: 'mf-form' }),
                    React.createElement(antd_1.Form.Item, { label: '\u9879\u76EE\u8DEF\u5F84' }, getFieldDecorator('path', {
                        rules: [{ required: true, message: 'Please input project path' }],
                        initialValue: project && project.path
                    })(React.createElement(antd_1.Input, { size: 'default', placeholder: 'project absolute path', onMouseDown: this.selectHandle }))),
                    React.createElement(antd_1.Form.Item, { label: '\u9879\u76EE\u540D\u79F0' }, getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Please input project name' }],
                        initialValue: project && project.name
                    })(React.createElement(antd_1.Input, { placeholder: 'project name' }))),
                    React.createElement(antd_1.Form.Item, { label: '\u5E73\u53F0\u670D\u52A1' }, getFieldDecorator('deploy', {
                        rules: [{ required: true, message: 'Please input deploy server' }],
                        initialValue: project && project.deploy
                    })(React.createElement(antd_1.Input, { placeholder: 'deploy server' }))),
                    React.createElement("div", null,
                        React.createElement(antd_1.Button, { type: 'primary', className: 'mf-form-cancel', onClick: this.hideLaunch }, "cancel"),
                        React.createElement(antd_1.Button, { type: 'primary', className: 'mf-form-save', htmlType: 'submit' }, "save"))))));
    };
    return Launch;
}(React.Component));
var FormLaunch = antd_1.Form.create()(Launch);
var mapStateToProps = function (state, ownProps) {
    return {
        project: state.project,
        onHide: ownProps.onHide
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        initProjectAction: redux_1.bindActionCreators(action_1.default.initProject, dispatch),
        initFileAction: redux_1.bindActionCreators(action_1.default.initFile, dispatch)
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(FormLaunch);


/***/ }),

/***/ 972:
/***/ (function(module, exports) {

module.exports = require("node-cmd");

/***/ }),

/***/ 973:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(974);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(47)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 974:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// Module
exports.push([module.i, ".mf-launch {\n  height: 400px;\n  font-family: \"Comic Sans MS\", Monaco, Microsoft YaHei, PingFang SC, STHeiti, SimHei, sans-serif;\n}\n.mf-launch .ant-form-item label {\n  font-weight: 700;\n}\n.mf-launch .mf-launch-layout {\n  justify-content: center;\n}\n.mf-launch h2 {\n  text-align: center;\n  color: #464646;\n}\n.mf-launch h2 img {\n  width: 30px;\n  height: 30px;\n  margin-right: 10px;\n  vertical-align: bottom;\n}\n.mf-launch .mf-form {\n  margin-top: 50px;\n  text-align: center;\n}\n.mf-launch .mf-form .mf-form-cancel {\n  margin-right: 10px;\n}\n.mf-launch .mf-form .mf-form-save {\n  margin-top: 10px;\n}\n.mf-launch .mf-form .ant-form-explain {\n  text-align: left;\n}\n.ant-modal-body {\n  font-family: \"Comic Sans MS\", Monaco, Microsoft YaHei, PingFang SC, STHeiti, SimHei, sans-serif;\n}\n", ""]);


/***/ }),

/***/ 975:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(976);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(47)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 976:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// Module
exports.push([module.i, ".mf-select {\n  display: inline-flex;\n  align-items: center;\n  font-size: 14px;\n}\n.mf-select label {\n  margin-right: 10px;\n}\n.mf-select em {\n  margin-left: 5px;\n  color: red;\n}\n.mf-launch-modal {\n  top: 0 !important;\n}\n.mf-launch-modal .ant-modal-body {\n  padding: 0;\n}\n.mf-build-modal .ant-modal-header {\n  padding: 10px;\n  background: #1890ff;\n  border-bottom: none;\n}\n.mf-build-modal .ant-modal-header .ant-modal-title {\n  color: #fff;\n}\n.mf-build-modal .ant-modal-body {\n  min-height: 200px;\n  padding: 0;\n  background: #242424;\n}\n.mf-build-modal .ant-modal-body * {\n  font-size: 14px !important;\n}\n.mf-build-modal .ant-modal-body .css-5l7c0w,\n.mf-build-modal .ant-modal-body .css-17pf22k,\n.mf-build-modal .ant-modal-body .css-lbd0fj {\n  height: 25px;\n}\n.mf-build-modal .ant-modal-close-x {\n  height: 43px;\n  line-height: 43px;\n}\n.mf-build-modal .ant-modal-close-x .ant-modal-close-icon {\n  color: #fff;\n}\n", ""]);


/***/ }),

/***/ 977:
/***/ (function(module, exports) {

module.exports = require("fast-glob");

/***/ }),

/***/ 978:
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),

/***/ 979:
/***/ (function(module, exports, __webpack_require__) {

/**
 * @file create webpack config
 * TODO: set builtins
 */

const classPlugin = __webpack_require__(980);
const presetEnv = __webpack_require__(1143);
const presetReact = __webpack_require__(1665);

module.exports = function(data, webpack) {
  return {
    mode: 'production',
    devtool: false,
    entry: {
      [data.name]: data.entry
    },
    output: {
      libraryTarget: 'commonjs',
      filename: '[name].js',
      // chunk 包加 hash [name].[chunkhash].js
      chunkFilename: '[name].js',
      path: data.output
    },
    module: {
      noParse: /moment/,
      rules: [
        {
          test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
          use: 'url-loader?limit=30000&name=[name].[ext]'
        },
        {
          test: /\.(js|jsx)?/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [[presetEnv, { modules: false }], presetReact],
              plugins: [classPlugin]
            }
          },
          exclude: /dist|node_modules/
        },
        {
          test: /\.less$/,
          exclude: /dist|node_modules/,
          use: ['style-loader', 'css-loader', 'less-loader']
        }
      ]
    },
    externals: {
      react: 'react',
      'react-dom': 'react-dom',
      'mf-enhance': 'mf-enhance',
      antd: 'antd'
    },
    resolve: {
      extensions: ['.jsx', '.js', '.json']
    },
    resolveLoader: {
      modules: [`${data.appPath}/node_modules`]
    },
    plugins: [new webpack.optimize.ModuleConcatenationPlugin()]
  };
};


/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @file util tools
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CMD = __webpack_require__(972);
var remote = __webpack_require__(126).remote;
var FileType = {
    js: 'JavaScript',
    ts: 'TypeScript',
    jsx: 'JavaScript React',
    tsx: 'TypeScript React',
    css: 'Css',
    less: 'Less'
};
var CodeType = {
    '.js': 'javascript',
    '.ts': 'javascript',
    '.jsx': 'javascript',
    '.tsx': 'javascript',
    '.json': 'javascript',
    '.css': 'text/css',
    '.less': 'text/x-less',
    '.html': 'text/html'
};
exports.default = {
    getShare: function (key) {
        return remote.getGlobal(key);
    },
    parseFile: function (file) {
        var tokens = file.split('/');
        var name = tokens.pop();
        tokens = name.split('.');
        var type = tokens.pop();
        return { name: name, type: FileType[type] };
    },
    getFileType: function (path) {
        var tokens = path.split('/');
        var name = tokens.pop();
        tokens = name.split('.');
        var type = tokens.pop();
        return FileType[type];
    },
    getCodeType: function (ext) {
        return CodeType[ext];
    },
    getLocalWin: function () {
        return __webpack_require__(126).remote.getCurrentWindow();
    },
    /**
     * 执行 cli 命令
     */
    shell: function (cmd) {
        return new Promise(function (resolve, reject) {
            CMD.get(cmd, function (err, data, stderr) {
                err ? reject(err) : resolve(data);
            });
        });
    },
    /**
     * 所有外链图片都要用这个方法转化
     */
    getFilePath: function (url) {
        var info = remote.getGlobal('info');
        var protocol =  true ? "file://" + info.appPath : undefined;
        return "" + protocol + url;
    },
    /**
     * 获取 app 路径，代替 __dirname && process.cwd()
     */
    getAppPath: function () {
        return remote.getGlobal('info').appPath;
    }
};


/***/ })

/******/ });