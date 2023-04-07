import { Request, Response } from 'express';
import { Scanner } from '../../ng-swagger-gen/models/scanner';

export function getScanner(req: Request, res: Response) {
    const scanners: Scanner[] = [
        {
            name: 'demo',
            vendor: 'test',
            version: '1.0',
        },
    ];
    res.json(scanners);
}

export function getQueues(req: Request, res: Response) {
    const queues = [
        {
            job_type: 'EXECUTION_SWEEP',
            paused: false,
            latency: 24 * 60 * 60 + 1,
        },
        { job_type: 'GARBAGE_COLLECTION', paused: false },
        { job_type: 'IMAGE_SCAN', paused: false },
        { job_type: 'P2P_PREHEAT', paused: false },
        { job_type: 'PURGE_AUDIT_LOG', paused: false },
        { job_type: 'REPLICATION', paused: false },
        { job_type: 'RETENTION', paused: false },
        { job_type: 'SCAN_DATA_EXPORT', paused: false },
        { job_type: 'SCHEDULER', paused: false },
        { job_type: 'SLACK', paused: false },
        { job_type: 'SYSTEM_ARTIFACT_CLEANUP', paused: false },
        { job_type: 'WEBHOOK', paused: false },
    ];
    res.json(queues);
}
