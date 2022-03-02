// import { ReactiveControllerHost } from 'lit';
// import { StatusRenderer, Task } from '@lit-labs/task';

// export class NamesController {
//     public host: ReactiveControllerHost;
//     private task!: Task;
//     public player_id: string;

//     constructor(host: ReactiveControllerHost) {
//         this.host = host;
//         this.task = new Task<[string], Response>(host,
//             async ([player_id]: [string]) => {
//                 const response = await fetch(`https://api.kickbase.com/players/${player_id}/points`);
//                 const result = await response.json();
//                 if (result.error !== undefined) {
//                     throw new Error(result.error);
//                 }
//                 return result;
//             }, () => [this.player_id]
//         );
//     }

//     render(renderFunctions: StatusRenderer<Response>) {
//         return this.task.render(renderFunctions);
//     }
// }