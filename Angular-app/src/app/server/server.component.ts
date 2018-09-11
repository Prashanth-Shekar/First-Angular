import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .online {
        color: white;
    }
    `]
})

export class ServerComponent {
    serverCreated=false;
    allowNewServer = false;
    serverCreationStatus = 'No server was created';
    serverName='TestServer';
    servers= ['Testserver', 'Testserver2']; 
    constructor() {

        setTimeout(() => {
            this.allowNewServer = true;
        }, 4000)
    }

    onCreateServer(){
        this.serverCreated=true;
        this.servers.push(this.serverName);
        this.serverCreationStatus='Server was created';
    }

    onUpdateServerName(event: any){
        this.serverName= (<HTMLInputElement>event.target).value; 
        
    }

    serverID: Number = 10;
    serverStatus: string = 'offline';

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green': 'red';
    }
}