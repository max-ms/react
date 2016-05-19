var _ = require('lodash')

var people = [{
  "id": 1,
  "gender": "Male",
  "first_name": "Jeremy",
  "last_name": "Hill",
  "email": "jhill0@google.co.uk",
  "ip_address": "45.87.47.218"
}, {
  "id": 2,
  "gender": "Male",
  "first_name": "William",
  "last_name": "Parker",
  "email": "wparker1@japanpost.jp",
  "ip_address": "246.26.34.137"
}, {
  "id": 3,
  "gender": "Male",
  "first_name": "Jack",
  "last_name": "Ortiz",
  "email": "jortiz2@biblegateway.com",
  "ip_address": "25.132.175.224"
}, {
  "id": 4,
  "gender": "Female",
  "first_name": "Heather",
  "last_name": "Ryan",
  "email": "hryan3@rakuten.co.jp",
  "ip_address": "189.87.150.138"
}, {
  "id": 5,
  "gender": "Female",
  "first_name": "Rose",
  "last_name": "Peters",
  "email": "rpeters4@nifty.com",
  "ip_address": "150.206.142.198"
}, {
  "id": 6,
  "gender": "Female",
  "first_name": "Kimberly",
  "last_name": "Carpenter",
  "email": "kcarpenter5@facebook.com",
  "ip_address": "89.204.109.251"
}, {
  "id": 7,
  "gender": "Male",
  "first_name": "Chris",
  "last_name": "Weaver",
  "email": "cweaver6@techcrunch.com",
  "ip_address": "143.124.194.60"
}, {
  "id": 8,
  "gender": "Male",
  "first_name": "Henry",
  "last_name": "Day",
  "email": "hday7@plala.or.jp",
  "ip_address": "241.174.247.40"
}, {
  "id": 9,
  "gender": "Female",
  "first_name": "Wanda",
  "last_name": "Tucker",
  "email": "wtucker8@wikimedia.org",
  "ip_address": "244.136.23.216"
}, {
  "id": 10,
  "gender": "Female",
  "first_name": "Evelyn",
  "last_name": "Martin",
  "email": "emartin9@ocn.ne.jp",
  "ip_address": "42.220.46.3"
}, {
  "id": 11,
  "gender": "Female",
  "first_name": "Nancy",
  "last_name": "Chavez",
  "email": "nchaveza@cocolog-nifty.com",
  "ip_address": "64.67.71.61"
}, {
  "id": 12,
  "gender": "Male",
  "first_name": "Adam",
  "last_name": "Montgomery",
  "email": "amontgomeryb@ox.ac.uk",
  "ip_address": "246.127.93.185"
}, {
  "id": 13,
  "gender": "Female",
  "first_name": "Shirley",
  "last_name": "Lopez",
  "email": "slopezc@qq.com",
  "ip_address": "165.55.142.4"
}, {
  "id": 14,
  "gender": "Male",
  "first_name": "Eric",
  "last_name": "Graham",
  "email": "egrahamd@usa.gov",
  "ip_address": "220.230.62.66"
}, {
  "id": 15,
  "gender": "Female",
  "first_name": "Linda",
  "last_name": "Moore",
  "email": "lmooree@theatlantic.com",
  "ip_address": "107.231.165.53"
}, {
  "id": 16,
  "gender": "Female",
  "first_name": "Shirley",
  "last_name": "Patterson",
  "email": "spattersonf@skyrock.com",
  "ip_address": "157.252.159.142"
}, {
  "id": 17,
  "gender": "Female",
  "first_name": "Maria",
  "last_name": "Crawford",
  "email": "mcrawfordg@csmonitor.com",
  "ip_address": "111.235.27.177"
}, {
  "id": 18,
  "gender": "Male",
  "first_name": "Stephen",
  "last_name": "Holmes",
  "email": "sholmesh@hhs.gov",
  "ip_address": "6.85.173.18"
}, {
  "id": 19,
  "gender": "Male",
  "first_name": "Billy",
  "last_name": "Hunter",
  "email": "bhunteri@wikimedia.org",
  "ip_address": "195.96.241.141"
}, {
  "id": 20,
  "gender": "Female",
  "first_name": "Diana",
  "last_name": "Riley",
  "email": "drileyj@1und1.de",
  "ip_address": "77.229.202.147"
}];

var femaleCount = _.filter(people, {gender: "Female"}).length

alert(femaleCount)