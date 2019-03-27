import moment from 'moment';
const day = {
    'monday': 1,
    'mon': 1,
    'tuesday': 2,
    'tues': 2,
    'tue': 2,
    'wednesday': 3,
    'wed': 3,
    'thursday': 4,
    'thu': 4,
    'thur': 4,
    'thurs': 4,
    'friday': 5,
    'fri': 5,
    'saturday': 6,
    'sat': 6,
    'sunday': 7,
    'sun': 7,
};

const prefix = {
    'in': 0,
    'on': 0,
    'due': 0,
}

const multiplier = {
    'previous': -1,
    'this': 0,
    'next': 1,
};

const time = {
    'day': 1,
    'days': 1,
    'weeks': 7,
    'week': 7,
    'month': 30,
    'months': 30,
    'year': 365,
    'years': 365,
};

const day_time = {
    'yesterday': -1,
    'today': 0,
    'tomorrow': 1,
    'tmrw': 1,
}

export const parse = (input) => {
    const data = {};
    let new_input = input.split(" ");
    if (new_input && new_input[0] == 'e' || new_input[0] == 'event') {
        data['is_event'] = true;
        new_input.splice(0, 1);
    }
    let i;
    for (i = 0; i < new_input.length; i++) {
        const val = new_input[i].toLowerCase();
        if (val in day || val in prefix || val in multiplier || val in time || val in day_time || check_date(val) || !isNaN(val)) {
            const result = evaluate(new_input, i);
            if (result['to_add']) {
                data['date'] = moment().add(result['to_add'] + 1, 'days').format('YYYY-MM-DD')
                new_input.splice(i, result['stop'] - i + 1);
                break;
            }
        }
    }
    data['name'] = new_input.join(' ');
    return data;
}

const evaluate = (input, i) => {
    let j;
    let curr_multiplier = 0;
    let curr_time = 7;
    let date = false;
    for (j = i; j < input.length; j++) {
        const val = input[j].toLowerCase();
        if (val in prefix) {
            continue;
        } else if (val in multiplier) {
            curr_multiplier += multiplier[val];
        } else if (val in time) {
            curr_time = time[val];
            date = curr_multiplier * curr_time;
        } else if (val in day) {
            const new_day = day[val];
            const today = moment().day();
            const diff = new_day >= today ? new_day - today : new_day + 7 - today;
            const to_add = curr_multiplier * curr_time + diff;
            return {'to_add': to_add, 'stop': j};
        } else if (!isNaN(val)) {
            curr_multiplier = parseInt(val);
        } else if (val in day_time) {
            return {'to_add': day_time[val], 'stop': j};
        } else if (check_date(val)) {
            return {'to_add': check_date(val), 'stop': j};
        } else {
            return {'to_add': date, 'stop': j};
        }
    }
    return {'to_add': date, 'stop': j};
}

const check_date = (input) => {
    let val;
    if (moment(input, 'MM/DD/YYYY', true).isValid()) {
        val = moment(input, 'MM/DD/YYYY').diff(moment(), 'days');
    } else if (moment(input, 'DD/MM/YYYY', true).isValid()) {
        val = moment(input, 'DD/MM/YYYY').diff(moment(), 'days');
    } else if (moment(input, 'MM-DD-YYYY', true).isValid()) {
        val = moment(input, 'MM-DD-YYYY').diff(moment(), 'days');
    } else if (moment(input, 'DD-MM-YYYY', true).isValid()) {
        val = moment(input, 'DD-MM-YYYY').diff(moment(), 'days');
    } else if (moment(input, 'YYYY/MM/DD', true).isValid()) {
        val = moment(input, 'YYYY/MM/DD').diff(moment(), 'days');
    } else if (moment(input, 'YYYY-MM-DD', true).isValid()) {
        val = moment(input, 'YYYY-MM-DD').diff(moment(), 'days');
    } else if (moment(input, 'YYYY/DD/MM', true).isValid()) {
        val = moment(input, 'YYYY/DD/MM').diff(moment(), 'days');
    } else if (moment(input, 'YYYY-DD-MM', true).isValid()) {
        val = moment(input, 'YYYY-DD-MM').diff(moment(), 'days');
    } else {
        return false
    }
    return val;
}
