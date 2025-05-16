<?php

namespace App\Http\Requests;

use Illuminate\Support\Str;
use Illuminate\Foundation\Http\FormRequest;

class ArticleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'min:3'],
            'slug' => ['nullable', 'string', 'unique:articles,slug'],
            'content' => ['required', 'string'],
            'thumbnail' => ['nullable', 'image', 'mimes:png,jpg', 'max:2048'],
            'category_id' => ['required', 'exists:categories,id'],
            'is_featured' => ['nullable', 'boolean'],
            'views' => ['nullable', 'integer', 'min:0']
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'slug' => Str::slug($this->title),
            'is_featured' => $this->is_featured ?? false,
            'views' => $this->views ?? 0
        ]);
    }
}
