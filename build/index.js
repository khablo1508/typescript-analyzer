"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const Summary_1 = require("./Summary");
// object that satisfies DataReader interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// instance of MatchReader and pass smth satisfying 'DataReader' unterface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('West Ham'), new HtmlReport_1.HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
