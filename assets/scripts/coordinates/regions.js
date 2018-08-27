'use strict'

const regionNorthAmerica = [
  {text: 'United States', value: 'US'},
  {text: 'Canada', value: 'CA'},
  {text: 'Mexico', value: 'MX'}
]

const regionEurope = [
  {text: 'Albania', value: 'AL'},
  {text: 'Andorra', value: 'AD'},
  {text: 'Armenia', value: 'AM'},
  {text: 'Austria', value: 'AT'},
  {text: 'Azerbaijan', value: 'AZ'},
  {text: 'Belgium', value: 'BE'},
  {text: 'Belarus', value: 'BY'},
  {text: 'Bosnia', value: 'BA'},
  {text: 'Croatia', value: 'HR'},
  {text: 'Cyprus', value: 'CY'},
  {text: 'Czech Republic', value: 'CZ'},
  {text: 'Denmark', value: 'DK'},
  {text: 'Estonia', value: 'EE'},
  {text: 'Faroe Islands', value: 'FO'},
  {text: 'Finland', value: 'FI'},
  {text: 'France', value: 'FR'},
  {text: 'Georgia', value: 'GE'},
  {text: 'Germany', value: 'DE'},
  {text: 'Greece', value: 'GR'},
  {text: 'Hungary', value: 'HU'},
  {text: 'Iceland', value: 'IS'},
  {text: 'Ireland', value: 'IE'},
  {text: 'Italy', value: 'IT'},
  {text: 'Latvia', value: 'LV'},
  {text: 'Liechtenstein', value: 'LI'},
  {text: 'Lithuania', value: 'LT'},
  {text: 'Luxembourg', value: 'LU'},
  {text: 'Macedonia', value: 'MK'},
  {text: 'Monaco', value: 'MC'},
  {text: 'Moldova', value: 'MD'},
  {text: 'Montenegro', value: 'ME'},
  {text: 'Malta', value: 'MT'},
  {text: 'Netherlands', value: 'NL'},
  {text: 'Norway', value: 'NO'},
  {text: 'Poland', value: 'PL'},
  {text: 'Portugal', value: 'PT'},
  {text: 'Romania', value: 'RO'},
  {text: 'Russia', value: 'RU'},
  {text: 'Serbia', value: 'RS'},
  {text: 'Slovakia', value: 'SK'},
  {text: 'Slovenia', value: 'SI'},
  {text: 'Spain', value: 'ES'},
  {text: 'Sweden', value: 'SE'},
  {text: 'Switzerland', value: 'CH'},
  {text: 'Turkey', value: 'TR'},
  {text: 'Ukraine', value: 'UA'},
  {text: 'United Kingdom', value: 'UK'}
]

const regionAsia = [
  {text: 'Afghanistan', value: 'AF'},
  {text: 'Azerbaijan', value: 'AZ'},
  {text: 'Bahrain', value: 'BH'},
  {text: 'Bangladesh', value: 'BD'},
  {text: 'Bhutan', value: 'BT'},
  {text: 'Brunei', value: 'BN'},
  {text: 'Cambodia', value: 'KH'},
  {text: 'China', value: 'CN'},
  {text: 'Georgia', value: 'GE'},
  {text: 'Hong Kong', value: 'HK'},
  {text: 'India', value: 'IN'},
  {text: 'Indonesia', value: 'ID'},
  {text: 'Israel', value: 'IL'},
  {text: 'Iran', value: 'IR'},
  {text: 'Iraq', value: 'IQ'},
  {text: 'Israel', value: 'IL'},
  {text: 'Japan', value: 'JP'},
  {text: 'Jordan', value: 'JO'},
  {text: 'Kazakhstan', value: 'KZ'},
  {text: 'Korea', value: 'KR'},
  {text: 'Kuwait', value: 'KW'},
  {text: 'Kyrgyzstan', value: 'KG'},
  {text: 'Laos', value: 'LA'},
  {text: 'Lebanon', value: 'LB'},
  {text: 'Macau', value: 'MO'},
  {text: 'Malaysia', value: 'MY'},
  {text: 'Maldives', value: 'MV'},
  {text: 'Mongolia', value: 'MN'},
  {text: 'Myanmar', value: 'MM'},
  {text: 'Nepal', value: 'NP'},
  {text: 'Oman', value: 'OM'},
  {text: 'Philippines', value: 'PH'},
  {text: 'Palestine', value: 'PS'},
  {text: 'Qatar', value: 'QA'},
  {text: 'Saudi Arabia', value: 'SA'},
  {text: 'Singapore', value: 'SG'},
  {text: 'Sri Lanka', value: 'LK'},
  {text: 'Syria', value: 'SY'},
  {text: 'Taiwan', value: 'TW'},
  {text: 'Tajikistan', value: 'TJ'},
  {text: 'Thailand', value: 'TH'},
  {text: 'Turkey', value: 'TR'},
  {text: 'Turkmenistan', value: 'TM'},
  {text: 'United Arab Emirates', value: 'AE'},
  {text: 'Uzbekistan', value: 'UZ'},
  {text: 'Vietnam', value: 'VN'},
  {text: 'Yemen', value: 'YE'}
]

const regionOceania = [
  {text: 'American Samoa', value: 'AS'},
  {text: 'Australia', value: 'AU'},
  {text: 'Cook Islands', value: 'CK'},
  {text: 'East Timor', value: 'TL'},
  {text: 'Federated Staes of Micronesia', value: 'FM'},
  {text: 'Fiji Islands', value: 'FJ'},
  {text: 'French Polynesia', value: 'PF'},
  {text: 'Guam', value: 'GU'},
  {text: 'Kiribati', value: 'KI'},
  {text: 'Marshall Islands', value: 'MH'},
  {text: 'Nauru', value: 'NR'},
  {text: 'New Caledonia', value: 'NC'},
  {text: 'New Zealand', value: 'NZ'},
  {text: 'Niue', value: 'NU'},
  {text: 'Norfolk Island', value: 'NF'},
  {text: 'Palau', value: 'PW'},
  {text: 'Papua New Guinea', value: 'PG'},
  {text: 'Saipan', value: 'MP'},
  {text: 'Samoa', value: 'WS'},
  {text: 'Solomon Islands', value: 'SB'},
  {text: 'Tokelau', value: 'TK'},
  {text: 'Tonga', value: 'TO'},
  {text: 'Tuvalu', value: 'TV'},
  {text: 'Wake Island', value: 'UM'},
  {text: 'Vanuatu', value: 'VU'},
  {text: 'Wallis and Futuna Islands', value: 'WF'}
]

const regionSouthAmerica = [
  {text: 'Argentina', value: 'AR'},
  {text: 'Bolivia', value: 'BO'},
  {text: 'Brazil', value: 'BR'},
  {text: 'Chile', value: 'CL'},
  {text: 'Colombia', value: 'CO'},
  {text: 'Ecuador', value: 'EC'},
  {text: 'French Guiana', value: ''},
  {text: 'Guyana', value: 'GY'},
  {text: 'Paraguay', value: 'PY'},
  {text: 'Peru', value: 'PE'},
  {text: 'Suriname', value: 'SR'},
  {text: 'Uruguay', value: 'UY'},
  {text: 'Venezuela', value: 'VE'}
]

const regionCentralAmerica = [
  {text: 'Belize', value: 'AR'},
  {text: 'Costa Rica', value: 'BO'},
  {text: 'El Salvador', value: 'BR'},
  {text: 'Guatemala', value: 'CL'},
  {text: 'Honduras', value: 'CO'},
  {text: 'Mexico', value: 'EC'},
  {text: 'Nicaragua', value: 'GY'},
  {text: 'Panama', value: 'PY'}
]

const regionCaribbean = [
  {text: 'Anguilla', value: 'AI'},
  {text: 'Antigua and Barbuda', value: 'AG'},
  {text: 'Aruba', value: 'AW'},
  {text: 'Bahamas', value: 'BS'},
  {text: 'Barbados', value: 'BB'},
  {text: 'Bonaire, Saint Eustatius and Saba', value: 'BQ'},
  {text: 'British Virgin Islands', value: 'VG'},
  {text: 'Cayman Islands', value: 'KY'},
  {text: 'Cuba', value: 'CU'},
  {text: 'Curaçao', value: 'CW'},
  {text: 'Dominica', value: 'DM'},
  {text: 'Dominican Republic', value: 'DO'},
  {text: 'Grenada', value: 'GD'},
  {text: 'Guadeloupe', value: 'GP'},
  {text: 'Haiti', value: 'HT'},
  {text: 'Jamaica', value: 'JM'},
  {text: 'Martinique', value: 'MQ'},
  {text: 'Monserrat', value: 'MS'},
  {text: 'Puerto Rico', value: 'PR'},
  {text: 'Saint-Barthélemy', value: 'BL'},
  {text: 'Saint Kitts and Nevis', value: 'KN'},
  {text: 'Saint Lucia', value: 'LC'},
  {text: 'Saint Martin', value: 'MF'},
  {text: 'Saint Vincent and the Grenadines', value: 'VC'},
  {text: 'Trinidad and Tobago', value: 'TT'},
  {text: 'Turks and Caicos Islands', value: 'TC'},
  {text: 'Virgin Islands', value: 'VI'}
]

const regionAfrica = [
  {text: 'Algeria', value: 'DZ'},
  {text: 'Angola', value: 'AO'},
  {text: 'Benin', value: 'BJ'},
  {text: 'Botswana', value: 'BW'},
  {text: 'Burkina Faso', value: 'BF'},
  {text: 'Burundi', value: 'BI'},
  {text: 'Cameroon', value: 'CM'},
  {text: 'Cape Verde', value: 'CV'},
  {text: 'Central African Republic', value: 'CF'},
  {text: 'Chad', value: 'TD'},
  {text: 'Comoros', value: 'KM'},
  {text: 'Congo', value: 'CG'},
  {text: 'Ivory Coast', value: 'CI'},
  {text: 'Djibouti', value: 'DJ'},
  {text: 'Egypt', value: 'EG'},
  {text: 'Equatorial Guinea', value: 'GQ'},
  {text: 'Eritrea', value: 'ER'},
  {text: 'Ethiopia', value: 'ET'},
  {text: 'Gabon', value: 'GA'},
  {text: 'Gambia', value: 'GM'},
  {text: 'Ghana', value: 'GH'},
  {text: 'Guinea', value: 'GN'},
  {text: 'Guinea Bissau', value: 'GW'},
  {text: 'Kenya', value: 'KE'},
  {text: 'Lesotho', value: 'LS'},
  {text: 'Liberia', value: 'LR'},
  {text: 'Libya', value: 'LY'},
  {text: 'Madagascar', value: 'MG'},
  {text: 'Malawi', value: 'MW'},
  {text: 'Mali', value: 'ML'},
  {text: 'Mauritania', value: 'MR'},
  {text: 'Mauritius', value: 'MU'},
  {text: 'Mayotte', value: 'YT'},
  {text: 'Morocco', value: 'MA'},
  {text: 'Mozambique', value: 'MZ'},
  {text: 'Namibia', value: 'NA'},
  {text: 'Niger', value: 'NE'},
  {text: 'Nigeria', value: 'NG'},
  {text: 'Reunion', value: 'RE'},
  {text: 'Rwanda', value: 'RW'},
  {text: 'Sahara', value: 'EH'},
  {text: 'St. Helena', value: 'SH'},
  {text: 'St. Tome & Principe', value: 'ST'},
  {text: 'Senegal', value: 'SN'},
  {text: 'Seychelles', value: 'SC'},
  {text: 'Sierra Leona', value: 'SL'},
  {text: 'Somalia', value: 'SO'},
  {text: 'South Africa', value: 'ZA'},
  {text: 'South Sudan', value: 'SS'},
  {text: 'Sudan', value: 'SD'},
  {text: 'Swaziland', value: 'SZ'},
  {text: 'Tanzania', value: 'TZ'},
  {text: 'Togo', value: 'TG'},
  {text: 'Tunisia', value: 'TN'},
  {text: 'Uganda', value: 'UG'},
  {text: 'Zambia', value: 'ZM'},
  {text: 'Zimbabwe', value: 'ZW'}
]

let regionList = []

const PopulateRegionList = function () {
  console.log('PopulateRegionList ran')
  const select = document.getElementById('query-country')
  const selectedRegion = $('#query-region').val()
  console.log('selectedRegion is ', selectedRegion)

  if (selectedRegion === 'US,CA,MX') {
    regionList = regionNorthAmerica
  } else if (selectedRegion === 'Europe') {
    regionList = regionEurope
  } else if (selectedRegion === 'Asia') {
    regionList = regionAsia
  } else if (selectedRegion === 'Oceania') {
    regionList = regionOceania
  } else if (selectedRegion === 'SouthAmerica') {
    regionList = regionSouthAmerica
  } else if (selectedRegion === 'CentralAmerica') {
    regionList = regionCentralAmerica
  } else if (selectedRegion === 'Caribbean') {
    regionList = regionCaribbean
  } else if (selectedRegion === 'Africa') {
    regionList = regionAfrica
  }

  select.innerHTML = ''
  for (let i = 0; i < regionList.length; i++) {
    const option = document.createElement('option')
    option.setAttribute('value', regionList[i].value)
    option.appendChild(document.createTextNode(regionList[i].text))
    select.appendChild(option)
  }
}

module.exports = {
  PopulateRegionList
}
