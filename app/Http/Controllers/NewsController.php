<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsCollection;
use App\Models\News;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;


class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $news = News::paginate(5);
        $news = new NewsCollection(News::orderByDesc('created_at')->paginate(8));
        return Inertia::render('Homepage', [
            'title' => 'QiuNews',
            'description' => 'Welcome to QiuNews',
            'news' => $news
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    $validatedData = $request->validate([
        'title' => 'required|max:255',
        'description' => 'required',
        'category' => 'required',
    ]);

    News::create([
        'title' => $validatedData['title'],
        'description' => $validatedData['description'],
        'category' => $validatedData['category'],
        'author' => Auth::user()->email,
    ]);

    return redirect()->back()->with('message', 'News Created');
}


    /**
     * Display the specified resource.
     */
    public function show(News $news)
    {
        $myNews = News::where('author', Auth::user()->email)->get();
        return Inertia::render('Dashboard', [
            'myNews' => $myNews,
        ]);
    }

    // public function showByUser(News $news)
    // {
    //     dd($myNews = $news::where('author', Auth::user()->email)->get());
    // }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(News $news, Request $request)
    {
        
        return Inertia::render('EditNews', [
            'myNews' => $news->find($request->id)
        ]);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, News $news)
    {
        News::where('id',$request->id)->update([
            'title' => $request->title,
            'description' => $request->description,
            'category' => $request->category,
        ]);
        return to_route('dashboard')->with('message', 'Update Success');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(News $news, Request $request)
    {
        $news = News::where('id',$request->id);
        $news->delete();
        return redirect()->back()->with('message', 'News Created');
    }
}
