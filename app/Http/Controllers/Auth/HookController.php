<?php
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Symfony\Component\Process\Process;
use Symfony\Component\Process\Exception\ProcessFailedException;

class HookController extends Controller
{
    public function push(Request $request,$type)
    {
        $data = $request->getContent();
        if ($type =='gitee') {
            $allow = $request->header('X-Gitee-Token') === env('GITEE_HOOK_PASSWORD') ?:false;
        } elseif ($type =='gogs') {
            $signature = $request->header('X-Gogs-Signature');
            $hash = hash_hmac ('sha256',$data,env('GOGS_HOOK_PASSWORD'));
            $allow = $signature === $hash?:false;
        }
        if ($allow) {
            $command = 'bash /root/update-blog.sh';
            $process = new Process($command);
            if (!$process->isSuccessful()) {
                throw new ProcessFailedException($process);
            }
            echo $process->getOutput();
        }
        return abort(403);


    }
}
