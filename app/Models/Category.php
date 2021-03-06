<?php

namespace App\Models;

use App\Helpers\Extensions\Tool;

class Category extends Base
{
    protected $fillable = ['name', 'flag', 'parent_id', 'keywords', 'description', 'sort'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function articles()
    {
        return $this->hasMany(Article::class);
    }

    /**
     * 递归获取树形索引
     * @param integer
     * @param integer
     * @return array 角色数组
     */
    public function getTreeIndex($id = 0, $deep = 0)
    {
        static $tempArr = [];
        $data = $this->query()->where('parent_id', $id)->orderBy('sort', 'asc')->get();
        foreach ($data as $k => $v) {
            $v->deep = $deep;
            $v->name = str_repeat("&nbsp;&nbsp;", $v->deep * 2) . '|--' . $v->name;
            $tempArr[] = $v;
            $this->getTreeIndex($v->id, $deep + 1);
        }
        return $tempArr;
    }

    /**
     * 删除数据
     *
     * @param array $map
     * @return bool
     */
    public function destroyData($map)
    {
        // 先获取分类id
        $categoryIdArray = $this
            ->query()
            ->whereMap($map)
            ->pluck('id')
            ->toArray();
        foreach ($categoryIdArray as $value) {
            if (0 === $this->query()->where('id', $value)->pluck('parent_id')->first()) {
                $categoryCount = $this->query()->where('parent_id', $value)->count();
                if (0 !== $categoryCount) {
                    Tool::showMessage('请先删除所选分类下的子分类', false);
                    return false;
                }
            }
        }
        // 获取分类下的文章数
        $articleCount = Article::query()->whereIn('category_id', $categoryIdArray)->count();
        // 如果分类下存在文章；则需要下删除文章
        if (0 !== $articleCount) {
            Tool::showMessage('请先删除所选分类下的文章', false);
            return false;
        }
        // 删除分类
        return parent::destroyData($map);
    }
}
