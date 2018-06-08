import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  projects = [
    {
      complete: true,
      name: 'Home Page',
      link: ''
    },
    {
      complete: true,
      name: 'Tribute Page',
      link: 'project/tribute-page'
    },
    {
      complete: false,
      name: 'Survey Form',
      link: 'project/survey-form'
    },
    {
      complete: false,
      name: 'Product Landing Page',
      link: 'project/product-landing-page'
    },
    {
      complete: false,
      name: 'Technical Documentation Page',
      link: 'project/technical-documentation-page'
    },
    {
      complete: false,
      name: 'Personal Portfolio Webpage',
      link: 'project/personal-portfolio-webpage'
    },
    {
      complete: false,
      name: 'Palindrome Checker',
      link: 'project/palindrome-checker'
    },
    {
      complete: false,
      name: 'Roman Numeral Converter',
      link: 'project/roman-numeral-converter'
    },
    {
      complete: false,
      name: 'Caesars Cipher',
      link: 'project/caesars-cipher'
    },
    {
      complete: false,
      name: 'Telephone Number Validator',
      link: 'project/telephone-number-validator'
    },
    {
      complete: false,
      name: 'Cash Register',
      link: 'project/cash-register'
    },
    {
      complete: false,
      name: 'Random Quote Machine',
      link: 'project/random-quote-machine'
    },
    {
      complete: false,
      name: 'Markdown Previewer',
      link: 'project/markdown-previewer'
    },
    {
      complete: false,
      name: 'Drum Machine',
      link: 'project/drum-machine'
    },
    {
      complete: false,
      name: 'JavaScript Calculator',
      link: 'project/javascript-calculator'
    },
    {
      complete: false,
      name: 'Pomodoro Clock',
      link: 'project/pomodoro-clock'
    },
    {
      complete: false,
      name: 'Bar Chart',
      link: 'project/bar-chart'
    },
    {
      complete: false,
      name: 'Scatterplot Graph',
      link: 'project/scatterplot-graph'
    },
    {
      complete: false,
      name: 'Heat Map',
      link: 'project/heat-map'
    },
    {
      complete: false,
      name: 'Choropleth Map',
      link: 'project/choropleth-map'
    },
    {
      complete: false,
      name: 'Treemap Diagram',
      link: 'project/treemap-diagram'
    },
    {
      complete: false,
      name: 'Timestamp Microservice',
      link: 'project/timestamp-microservice'
    },
    {
      complete: false,
      name: 'Request Header Microservice',
      link: 'project/request-header-microservice'
    },
    {
      complete: false,
      name: 'URL Shortener Microservice',
      link: 'project/url-shortener-microservice'
    },
    {
      complete: false,
      name: 'Exercise Tracker',
      link: 'project/exercise-tracker'
    },
    {
      complete: false,
      name: 'File Metadata Microservice',
      link: 'project/file-metadata-microservice'
    },
    {
      complete: false,
      name: 'Metric-Imperial Converter',
      link: 'project/metric-imperial-converter'
    },
    {
      complete: false,
      name: 'Issue Tracker',
      link: 'project/issue-tracker'
    },
    {
      complete: false,
      name: 'Personal Library',
      link: 'project/personal-library'
    },
    {
      complete: false,
      name: 'Stock Price Checker',
      link: 'project/stock-price-checker'
    },
    {
      complete: false,
      name: 'Anonymous Message Board',
      link: 'project/anonymous-message-board'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
