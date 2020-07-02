<?php

namespace App\Http\Controllers;

use App\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index()
    {
        $contact = Contact::all();
        return response()->json($contact);
    }

    
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $contact = Contact::create([
            'name' => $request->name,
            'tel' => $request->tel,
        ]);
        return response()->json($$contact);
    }

    public function show($id)
    {
        
    }

    public function edit($id)
    {
        $contact = Contact::find($id);
        return response()->json($contact);
    }

    public function update(Request $request, $id)
    {
        $contact = Contact::find($id)->update([
            'name' => $request->name,
            'tel' => $request->tel,
        ]);
        return response()->json($$contact);
    }

    public function destroy($id)
    {
        $contact = Contact::find($id)->delete();
        return response()->json($$contact);
    }
}
