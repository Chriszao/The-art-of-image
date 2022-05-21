import { Callback, Context, Handler } from 'aws-lambda';

export const handler: Handler = async (
	event: Event,
	_: Context,
	callback: Callback
) => {
	console.log({ event });
};
