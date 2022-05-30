import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';

// object that satisfies DataReader interface
const csvFileReader = new CsvFileReader('football.csv');

// instance of MatchReader and pass smth satisfying 'DataReader' unterface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis('West Ham'), new HtmlReport());

summary.buildAndPrintReport(matchReader.matches);
