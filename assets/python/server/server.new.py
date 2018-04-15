from killer import kill
from log import logname
import os
import argparse
import sys

logger = logname()

version_info = (0, 8, 0)
version = '.'.join(str(c) for c in version_info)


def start_server():
    logger.info(
        'Starting Turtle Control System... [PID:%s PPID:%s]', os.getpid(), os.getppid())
    kill()
    logger.info('Starting new server instance...')
    # logger.info('Battery: %s', frame.readBatteryVoltage())
    try:
        from sockets import web, app
        import frame
        web.run_app(app, host='0.0.0.0', port=5000)
    except OSError as e:
        logger.error(e)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        description='This is a Turtle WebSocket Server.')
    parser.add_argument('-v', action='version', version=version,
                        help='Show the version number and exit')
    parser.add_argument('start', nargs='?', help='Start server')

    args = parser.parse_args()

    if args.start is None:
        start_server()
