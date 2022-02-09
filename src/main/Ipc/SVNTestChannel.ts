import * as svn from 'node-svn-ultimate';
import { IpcChannel } from './IpcChannel';
import { IpcRequest } from './IpcRequest';

class SVNTestProps implements IpcRequest {}

export default class SVNTestChannel implements IpcChannel<SVNTestProps> {
  private name = 'SVN_CHANNEL';

  getChannelName(): string {
    return this.name;
  }

  handle(event: Electron.IpcMainEvent, request: SVNTestProps): void {
    console.log(this.name);

    svn.util.getRevision(
      'svn://192.168.35.59/test',
      (err: any, revision: string) => {
        console.log(`Head revision=${revision}`);
      },
    );
  }
}
