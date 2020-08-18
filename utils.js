const brokenCapabilities = {
    'browserName': 'googlechrome',
    'platformName': 'macOS 10.15',
    'browserVersion': 'latest',
    'sauce:options': {
        'name': 'Broken Google Search',
        "passed": "true"
    }
};

const workingCapabilities = {
    'browserName': 'googlechrome',
    'platformName': 'macOS 10.15',
    'browserVersion': 'latest',
    'sauce:options': {
        'name': 'Working Sauce Task 3',
        "passed": "true",
        "tags": ["task3"]
    }
};

exports.brokenCapabilities = brokenCapabilities
exports.workingCapabilities = workingCapabilities