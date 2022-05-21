const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const execute = command => {
	console.log(`$ ${command}`);

	spawn(command, {
		shell: true,
		stdio: 'inherit'
	});
};

function fileExists(_path, showConsole = true) {
	try {
		return fs.statSync(_path).isFile();
	} catch (e) {
		if (e.code == 'ENOENT') {
			if (showConsole) {
				console.log(`File ${path.basename(_path)} does not exist.`);
			}

			return false;
		}

		console.log('Exception fs.statSync (' + _path + '): ' + e);
		throw e;
	}
}

module.exports = {
	execute,
	fileExists
};
